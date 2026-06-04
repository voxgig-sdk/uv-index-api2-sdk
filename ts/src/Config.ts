
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

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
    }

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
          "name": "daily",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 0
        },
        {
          "name": "hourly",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 1
        },
        {
          "name": "latitude",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "longitude",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 3
        },
        {
          "name": "meta",
          "req": true,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 4
        },
        {
          "name": "now",
          "req": true,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 5
        },
        {
          "name": "ok",
          "req": true,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 6
        },
        {
          "name": "timezone",
          "req": true,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 7
        },
        {
          "name": "today",
          "req": true,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 8
        },
        {
          "name": "tomorrow",
          "req": true,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 9
        }
      ],
      "name": "forecast",
      "op": {
        "list": {
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "daily",
                    "orig": "daily",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "hourly",
                    "orig": "hourly",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "latitude",
                    "orig": "latitude",
                    "reqd": true,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "longitude",
                    "orig": "longitude",
                    "reqd": true,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "timezone",
                    "orig": "timezone",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
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

