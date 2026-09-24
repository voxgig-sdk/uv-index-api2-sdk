

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"daily":{"a":true,"h":"Daily","n":"daily","r":false,"sh":"Daily UV Index forecast data.","t":"`$ARRAY`","key$":"daily","index$":0},"hourly":{"a":true,"h":"Hourly","n":"hourly","r":false,"sh":"Hourly UV Index forecast data.","t":"`$ARRAY`","key$":"hourly","index$":1},"latitude":{"a":true,"h":"Latitude","n":"latitude","r":true,"sh":"Latitude coordinate in decimal degrees.","t":"`$NUMBER`","key$":"latitude","index$":2},"longitude":{"a":true,"h":"Longitude","n":"longitude","r":true,"sh":"Longitude coordinate in decimal degrees.","t":"`$NUMBER`","key$":"longitude","index$":3},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"t":"`$OBJECT`","key$":"meta","index$":4},"now":{"a":true,"h":"Now","n":"now","r":true,"t":"`$OBJECT`","key$":"now","index$":5},"ok":{"a":true,"h":"Ok","n":"ok","r":true,"t":"`$BOOLEAN`","key$":"ok","index$":6},"timezone":{"a":true,"h":"Timezone","n":"timezone","r":true,"t":"`$OBJECT`","key$":"timezone","index$":7},"today":{"a":true,"h":"Today","n":"today","r":true,"t":"`$OBJECT`","key$":"today","index$":8},"tomorrow":{"a":true,"h":"Tomorrow","n":"tomorrow","r":true,"t":"`$OBJECT`","key$":"tomorrow","index$":9}},"name":"forecast","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v1/forecast","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"daily","or":"daily","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"hourly","or":"hourly","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"latitude","or":"latitude","r":true,"t":"`$NUMBER`","index$":2},{"a":true,"k":"query","n":"longitude","or":"longitude","r":true,"t":"`$NUMBER`","index$":3},{"a":true,"k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/api/v1/forecast","q":{"exist":["daily","hourly","latitude","longitude","timezone"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"forecast"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"forecast","name__orig":"forecast","Name":"Forecast","name_":"forecast","name-":"forecast","NAME":"FORECAST","index$":0}, {"active":true,"entity":"forecast","key$":"BasicForecastFlow","kind":"basic","name":"BasicForecastFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"forecast_ref01"}}],"index$":0}]}, 'Forecast', {"GET /api/v1/forecast":{"protocol":"http","operationId":"getApiV1Forecast","responses":{"200":{"description":"Response for status 200","content":{"application/json":{"schema":{"type":"object","required":["ok","latitude","longitude","timezone","now","today","tomorrow","meta"],"properties":{"ok":{"const":true,"key$":"ok","type":"boolean"},"latitude":{"description":"Latitude coordinate in decimal degrees.","key$":"latitude","type":"number"},"longitude":{"description":"Longitude coordinate in decimal degrees.","key$":"longitude","type":"number"},"timezone":{"key$":"timezone","properties":{"id":{"description":"IANA timezone identifier used for all times.","type":"string"},"name":{"description":"Human-readable timezone name.","type":"string"}},"required":["id","name"],"type":"object"},"now":{"key$":"now","properties":{"date":{"description":"Current date in YYYY-MM-DD format.","type":"string"},"time":{"description":"Current time in HH:mm:ss format.","type":"string"},"uv_index":{"description":"Current UV Index value.","type":"number"}},"required":["date","time","uv_index"],"type":"object"},"today":{"key$":"today","properties":{"date":{"description":"Today's date in YYYY-MM-DD format.","type":"string"},"max":{"properties":{"time":{"description":"Time of maximum UV Index today in HH:mm:ss format.","type":"string"},"uv_index":{"description":"Maximum UV Index value for today.","type":"number"}},"required":["time","uv_index"],"type":"object"}},"required":["date","max"],"type":"object"},"tomorrow":{"key$":"tomorrow","properties":{"date":{"description":"Tomorrow's date in YYYY-MM-DD format.","type":"string"},"max":{"properties":{"time":{"description":"Time of maximum UV Index tomorrow in HH:mm:ss format.","type":"string"},"uv_index":{"description":"Maximum UV Index value for tomorrow.","type":"number"}},"required":["time","uv_index"],"type":"object"}},"required":["date","max"],"type":"object"},"daily":{"description":"Daily UV Index forecast data.","items":{"properties":{"date":{"description":"Date in YYYY-MM-DD format.","type":"string"},"max":{"properties":{"time":{"description":"Time of maximum UV Index for the day in HH:mm:ss format.","type":"string"},"uv_index":{"description":"Maximum UV Index value for the day.","type":"number"}},"required":["time","uv_index"],"type":"object"}},"required":["date","max"],"type":"object"},"key$":"daily","type":"array"},"hourly":{"description":"Hourly UV Index forecast data.","items":{"properties":{"date":{"description":"Date for this hour in YYYY-MM-DD format.","type":"string"},"time":{"description":"Time for this hour in HH:mm:ss format.","type":"string"},"uv_index":{"description":"UV Index value for this hour.","type":"number"}},"required":["date","time","uv_index"],"type":"object"},"key$":"hourly","type":"array"},"meta":{"key$":"meta","properties":{"license":{"properties":{"id":{"description":"License identifier in SPDX format.","type":"string"},"name":{"description":"License name.","type":"string"},"url":{"description":"License URL.","type":"string"}},"required":["id","name","url"],"type":"object"},"source":{"properties":{"attribution":{"description":"Suggested attribution text.","type":"string"},"url":{"description":"Source URL.","type":"string"}},"required":["attribution","url"],"type":"object"}},"required":["source","license"],"type":"object"}},"additionalProperties":false,"index$":0}}}},"400":{"description":"Response for status 400","content":{"application/json":{"schema":{"type":"object","required":["ok","message"],"properties":{"ok":{"const":false,"type":"boolean"},"message":{"description":"Human-readable error message.","type":"string"}},"additionalProperties":false}}}},"500":{"description":"Response for status 500","content":{"application/json":{"schema":{"type":"object","required":["ok","message"],"properties":{"ok":{"const":false,"type":"boolean"},"message":{"description":"Human-readable error message.","type":"string"}},"additionalProperties":false}}}},"503":{"description":"Response for status 503","content":{"application/json":{"schema":{"type":"object","required":["ok","message"],"properties":{"ok":{"const":false,"type":"boolean"},"message":{"description":"Human-readable error message.","type":"string"}},"additionalProperties":false}}}}},"parameters":[{"name":"latitude","in":"query","required":true,"schema":{"minimum":-90,"maximum":90,"description":"Latitude coordinate in decimal degrees.","error":"\"latitude\" must be a number between -90 and 90.","type":"number"},"index$":0},{"name":"longitude","in":"query","required":true,"schema":{"minimum":-180,"maximum":180,"description":"Longitude coordinate in decimal degrees.","error":"\"longitude\" must be a number between -180 and 180.","type":"number"},"index$":1},{"name":"timezone","in":"query","required":false,"schema":{"description":"IANA timezone identifier (e.g., \"America/New_York\"), \"UTC\", or \"Auto\" to infer from coordinates. Defaults to \"UTC\".","type":"string"},"index$":2},{"name":"daily","in":"query","required":false,"schema":{"description":"Include daily UV Index forecast data.","error":"\"daily\" must be a boolean value (\"true\" or \"false\").","type":"boolean"},"index$":3},{"name":"hourly","in":"query","required":false,"schema":{"description":"Include hourly UV Index forecast data.","error":"\"hourly\" must be a boolean value (\"true\" or \"false\").","type":"boolean"},"index$":4}],"securitySource":"unspecified"}})
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
  
