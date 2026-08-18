
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'UvIndexApi2',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$ARRAY`"
        },
        {
          "name": "hourly",
          "type": "`$ARRAY`"
        },
        {
          "name": "latitude",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "longitude",
          "req": true,
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
              "parts": [
                "api",
                "v1",
                "forecast"
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
              }
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
  config
}

