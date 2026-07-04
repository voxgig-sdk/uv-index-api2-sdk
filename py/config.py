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
            "active": True,
            "name": "daily",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "hourly",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "latitude",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "longitude",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "meta",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "now",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "timezone",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "today",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "tomorrow",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 9,
          },
        ],
        "name": "forecast",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "daily",
                      "orig": "daily",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "hourly",
                      "orig": "hourly",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "latitude",
                      "orig": "latitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "timezone",
                      "orig": "timezone",
                      "reqd": False,
                      "type": "`$STRING`",
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
