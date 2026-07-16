
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
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://uvindexapi.com',

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
          "active": true,
          "name": "daily",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "hourly",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "latitude",
          "req": true,
          "type": "`$NUMBER`",
          "index$": 2
        },
        {
          "active": true,
          "name": "longitude",
          "req": true,
          "type": "`$NUMBER`",
          "index$": 3
        },
        {
          "active": true,
          "name": "meta",
          "req": true,
          "type": "`$OBJECT`",
          "index$": 4
        },
        {
          "active": true,
          "name": "now",
          "req": true,
          "type": "`$OBJECT`",
          "index$": 5
        },
        {
          "active": true,
          "name": "ok",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 6
        },
        {
          "active": true,
          "name": "timezone",
          "req": true,
          "type": "`$OBJECT`",
          "index$": 7
        },
        {
          "active": true,
          "name": "today",
          "req": true,
          "type": "`$OBJECT`",
          "index$": 8
        },
        {
          "active": true,
          "name": "tomorrow",
          "req": true,
          "type": "`$OBJECT`",
          "index$": 9
        }
      ],
      "name": "forecast",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "daily",
                    "orig": "daily",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "hourly",
                    "orig": "hourly",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "latitude",
                    "orig": "latitude",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "longitude",
                    "orig": "longitude",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "timezone",
                    "orig": "timezone",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
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
              },
              "index$": 0
            }
          ],
          "key$": "list"
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

