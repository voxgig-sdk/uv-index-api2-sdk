import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "forecast",
    "accessor": "Forecast",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/forecast",
    "args": [],
    "select": {
      "daily": "v1",
      "hourly": "v1",
      "latitude": "v1",
      "longitude": "v1",
      "timezone": "v1"
    },
    "headers": [],
    "query": [
      "latitude",
      "longitude",
      "timezone",
      "daily",
      "hourly"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "ok": true,
      "latitude": 1,
      "longitude": 1,
      "timezone": {
        "id": "x",
        "name": "x"
      },
      "now": {
        "date": "x",
        "time": "x",
        "uv_index": 1
      },
      "today": {
        "date": "x",
        "max": {
          "time": "x",
          "uv_index": 1
        }
      },
      "tomorrow": {
        "date": "x",
        "max": {
          "time": "x",
          "uv_index": 1
        }
      },
      "daily": [
        {
          "date": "x",
          "max": {
            "time": "x",
            "uv_index": 1
          }
        }
      ],
      "hourly": [
        {
          "date": "x",
          "time": "x",
          "uv_index": 1
        }
      ],
      "meta": {
        "license": {
          "id": "x",
          "name": "x",
          "url": "x"
        },
        "source": {
          "attribution": "x",
          "url": "x"
        }
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
