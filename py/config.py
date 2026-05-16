# UvIndexApi2 SDK configuration


def make_config():
    return {
        "main": {
            "name": "UvIndexApi2",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://uvindexapi.com",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "forecast": {},
            },
        },
        "entity": {
      "forecast": {
        "fields": [
          {
            "name": "daily",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "hourly",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "latitude",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "longitude",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "meta",
            "req": True,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "now",
            "req": True,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "timezone",
            "req": True,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "today",
            "req": True,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "tomorrow",
            "req": True,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 9,
          },
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
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "hourly",
                      "orig": "hourly",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "latitude",
                      "orig": "latitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "timezone",
                      "orig": "timezone",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/v1/forecast",
                "parts": [
                  "api",
                  "v1",
                  "forecast",
                ],
                "select": {
                  "exist": [
                    "daily",
                    "hourly",
                    "latitude",
                    "longitude",
                    "timezone",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
