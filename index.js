const BPromise = require('bluebird')
const using = BPromise.using
const pgrm = require('pg-using-bluebird')({ dbUrl: 'pg-bug-local-test-db' })
const _ = require('lodash')

async function initialize() {
  return using(pgrm.getTransaction(), async tx => {
    await tx.queryRowsAsync(`drop table if exists table1`)
    await tx.queryRowsAsync(`create table table1 ( my_primary_key serial primary key, value int)`)
    await tx.queryRowsAsync(`insert into table1 (value) (select * from json_to_recordset($1) as foo(value int))`, [
      JSON.stringify(_.range(0, 1000000).map(value => ({ value })))
    ])
  })
}

function dbQuery() {
  return using(pgrm.getTransaction(), async tx => {
    await tx.queryRowsAsync("SET LOCAL statement_timeout TO '1ms'")
    await tx.queryRowsAsync(
      `INSERT INTO table1
       (value) VALUES ($1)`,
      [42]
    )
  })
}

async function doThing() {
  await initialize()
  console.log('Initialized, now looping..')
  while (true) {
    try {
      await dbQuery()
    } catch (e) {
      if (e.code !== '57014') {
        console.log(e)
      }
    }
  }
}

doThing()
