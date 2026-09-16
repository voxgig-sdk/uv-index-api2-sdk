

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { UvIndexApi2SDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ForecastEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when UV_INDEX_API2_TEST_LIVE=TRUE.
  afterEach(liveDelay('UV_INDEX_API2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = UvIndexApi2SDK.test()
    const ent = testsdk.Forecast()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.UV_INDEX_API2_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'forecast.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"daily","req":false,"short":"Daily UV Index forecast data.","type":"`$ARRAY`","index$":0},{"active":true,"name":"hourly","req":false,"short":"Hourly UV Index forecast data.","type":"`$ARRAY`","index$":1},{"active":true,"name":"latitude","req":true,"short":"Latitude coordinate in decimal degrees.","type":"`$NUMBER`","index$":2},{"active":true,"name":"longitude","req":true,"short":"Longitude coordinate in decimal degrees.","type":"`$NUMBER`","index$":3},{"active":true,"name":"meta","req":true,"type":"`$OBJECT`","index$":4},{"active":true,"name":"now","req":true,"type":"`$OBJECT`","index$":5},{"active":true,"name":"ok","req":true,"type":"`$BOOLEAN`","index$":6},{"active":true,"name":"timezone","req":true,"type":"`$OBJECT`","index$":7},{"active":true,"name":"today","req":true,"type":"`$OBJECT`","index$":8},{"active":true,"name":"tomorrow","req":true,"type":"`$OBJECT`","index$":9}],"name":"forecast","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"daily","orig":"daily","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"hourly","orig":"hourly","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"latitude","orig":"latitude","reqd":true,"type":"`$NUMBER`","index$":2},{"active":true,"kind":"query","name":"longitude","orig":"longitude","reqd":true,"type":"`$NUMBER`","index$":3},{"active":true,"kind":"query","name":"timezone","orig":"timezone","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /api/v1/forecast","json":"{\"operationId\":\"getApiV1Forecast\",\"parameters\":[{\"in\":\"query\",\"name\":\"latitude\",\"required\":true,\"schema\":{\"description\":\"Latitude coordinate in decimal degrees.\",\"error\":\"\\\"latitude\\\" must be a number between -90 and 90.\",\"maximum\":90,\"minimum\":-90,\"type\":\"number\"}},{\"in\":\"query\",\"name\":\"longitude\",\"required\":true,\"schema\":{\"description\":\"Longitude coordinate in decimal degrees.\",\"error\":\"\\\"longitude\\\" must be a number between -180 and 180.\",\"maximum\":180,\"minimum\":-180,\"type\":\"number\"}},{\"in\":\"query\",\"name\":\"timezone\",\"required\":false,\"schema\":{\"description\":\"IANA timezone identifier (e.g., \\\"America/New_York\\\"), \\\"UTC\\\", or \\\"Auto\\\" to infer from coordinates. Defaults to \\\"UTC\\\".\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"daily\",\"required\":false,\"schema\":{\"description\":\"Include daily UV Index forecast data.\",\"error\":\"\\\"daily\\\" must be a boolean value (\\\"true\\\" or \\\"false\\\").\",\"type\":\"boolean\"}},{\"in\":\"query\",\"name\":\"hourly\",\"required\":false,\"schema\":{\"description\":\"Include hourly UV Index forecast data.\",\"error\":\"\\\"hourly\\\" must be a boolean value (\\\"true\\\" or \\\"false\\\").\",\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"daily\":{\"description\":\"Daily UV Index forecast data.\",\"items\":{\"properties\":{\"date\":{\"description\":\"Date in YYYY-MM-DD format.\",\"type\":\"string\"},\"max\":{\"properties\":{\"time\":{\"description\":\"Time of maximum UV Index for the day in HH:mm:ss format.\",\"type\":\"string\"},\"uv_index\":{\"description\":\"Maximum UV Index value for the day.\",\"type\":\"number\"}},\"required\":[\"time\",\"uv_index\"],\"type\":\"object\"}},\"required\":[\"date\",\"max\"],\"type\":\"object\"},\"type\":\"array\"},\"hourly\":{\"description\":\"Hourly UV Index forecast data.\",\"items\":{\"properties\":{\"date\":{\"description\":\"Date for this hour in YYYY-MM-DD format.\",\"type\":\"string\"},\"time\":{\"description\":\"Time for this hour in HH:mm:ss format.\",\"type\":\"string\"},\"uv_index\":{\"description\":\"UV Index value for this hour.\",\"type\":\"number\"}},\"required\":[\"date\",\"time\",\"uv_index\"],\"type\":\"object\"},\"type\":\"array\"},\"latitude\":{\"description\":\"Latitude coordinate in decimal degrees.\",\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude coordinate in decimal degrees.\",\"type\":\"number\"},\"meta\":{\"properties\":{\"license\":{\"properties\":{\"id\":{\"description\":\"License identifier in SPDX format.\",\"type\":\"string\"},\"name\":{\"description\":\"License name.\",\"type\":\"string\"},\"url\":{\"description\":\"License URL.\",\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"url\"],\"type\":\"object\"},\"source\":{\"properties\":{\"attribution\":{\"description\":\"Suggested attribution text.\",\"type\":\"string\"},\"url\":{\"description\":\"Source URL.\",\"type\":\"string\"}},\"required\":[\"attribution\",\"url\"],\"type\":\"object\"}},\"required\":[\"source\",\"license\"],\"type\":\"object\"},\"now\":{\"properties\":{\"date\":{\"description\":\"Current date in YYYY-MM-DD format.\",\"type\":\"string\"},\"time\":{\"description\":\"Current time in HH:mm:ss format.\",\"type\":\"string\"},\"uv_index\":{\"description\":\"Current UV Index value.\",\"type\":\"number\"}},\"required\":[\"date\",\"time\",\"uv_index\"],\"type\":\"object\"},\"ok\":{\"const\":true,\"type\":\"boolean\"},\"timezone\":{\"properties\":{\"id\":{\"description\":\"IANA timezone identifier used for all times.\",\"type\":\"string\"},\"name\":{\"description\":\"Human-readable timezone name.\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"},\"today\":{\"properties\":{\"date\":{\"description\":\"Today's date in YYYY-MM-DD format.\",\"type\":\"string\"},\"max\":{\"properties\":{\"time\":{\"description\":\"Time of maximum UV Index today in HH:mm:ss format.\",\"type\":\"string\"},\"uv_index\":{\"description\":\"Maximum UV Index value for today.\",\"type\":\"number\"}},\"required\":[\"time\",\"uv_index\"],\"type\":\"object\"}},\"required\":[\"date\",\"max\"],\"type\":\"object\"},\"tomorrow\":{\"properties\":{\"date\":{\"description\":\"Tomorrow's date in YYYY-MM-DD format.\",\"type\":\"string\"},\"max\":{\"properties\":{\"time\":{\"description\":\"Time of maximum UV Index tomorrow in HH:mm:ss format.\",\"type\":\"string\"},\"uv_index\":{\"description\":\"Maximum UV Index value for tomorrow.\",\"type\":\"number\"}},\"required\":[\"time\",\"uv_index\"],\"type\":\"object\"}},\"required\":[\"date\",\"max\"],\"type\":\"object\"}},\"required\":[\"ok\",\"latitude\",\"longitude\",\"timezone\",\"now\",\"today\",\"tomorrow\",\"meta\"],\"type\":\"object\"}}},\"description\":\"Response for status 200\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"message\":{\"description\":\"Human-readable error message.\",\"type\":\"string\"},\"ok\":{\"const\":false,\"type\":\"boolean\"}},\"required\":[\"ok\",\"message\"],\"type\":\"object\"}}},\"description\":\"Response for status 400\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"message\":{\"description\":\"Human-readable error message.\",\"type\":\"string\"},\"ok\":{\"const\":false,\"type\":\"boolean\"}},\"required\":[\"ok\",\"message\"],\"type\":\"object\"}}},\"description\":\"Response for status 500\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"message\":{\"description\":\"Human-readable error message.\",\"type\":\"string\"},\"ok\":{\"const\":false,\"type\":\"boolean\"}},\"required\":[\"ok\",\"message\"],\"type\":\"object\"}}},\"description\":\"Response for status 503\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/forecast","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"forecast"}],"select":{"exist":["daily","hourly","latitude","longitude","timezone"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"forecast","name__orig":"forecast","Name":"Forecast","name_":"forecast","name-":"forecast","NAME":"FORECAST","index$":0}, {"active":true,"entity":"forecast","key$":"BasicForecastFlow","kind":"basic","name":"BasicForecastFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"forecast_ref01"}}],"index$":0}]}, 'Forecast')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let forecast_ref01_data = Object.values(setup.data.existing.forecast)[0] as any

    // LIST
    const forecast_ref01_ent = client.Forecast()
    const forecast_ref01_match: any = {}

    const forecast_ref01_list = (await forecast_ref01_ent.list(forecast_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/forecast/ForecastTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = UvIndexApi2SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['forecast01','forecast02','forecast03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'UV_INDEX_API2_TEST_FORECAST_ENTID': idmap,
    'UV_INDEX_API2_TEST_LIVE': 'FALSE',
    'UV_INDEX_API2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['UV_INDEX_API2_TEST_FORECAST_ENTID']

  const live = 'TRUE' === env.UV_INDEX_API2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['UV_INDEX_API2_TEST_FORECAST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new UvIndexApi2SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.UV_INDEX_API2_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
