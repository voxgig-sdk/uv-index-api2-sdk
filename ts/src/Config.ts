
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'UvIndexApi2',
        slug: "uv-index-api2",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://uvindexapi.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        forecast: {
        },
  
    }
  }


  entity = {
    "forecast": {
      "fields": [
        {
          "name": "daily",
          "short": "Daily UV Index forecast data.",
          "type": "`$ARRAY`"
        },
        {
          "name": "hourly",
          "short": "Hourly UV Index forecast data.",
          "type": "`$ARRAY`"
        },
        {
          "name": "latitude",
          "req": true,
          "short": "Latitude coordinate in decimal degrees.",
          "type": "`$NUMBER`"
        },
        {
          "name": "longitude",
          "req": true,
          "short": "Longitude coordinate in decimal degrees.",
          "type": "`$NUMBER`"
        },
        {
          "name": "meta",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "now",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "ok",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "timezone",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "today",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "tomorrow",
          "req": true,
          "type": "`$OBJECT`"
        }
      ],
      "name": "forecast",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "daily",
                    "orig": "daily",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "hourly",
                    "orig": "hourly",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "latitude",
                    "orig": "latitude",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "longitude",
                    "orig": "longitude",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/forecast",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "forecast"
                }
              ],
              "select": {
                "exist": [
                  "daily",
                  "hourly",
                  "latitude",
                  "longitude",
                  "timezone"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "forecast"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

