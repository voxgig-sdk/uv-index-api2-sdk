# UvIndexApi2 SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "UvIndexApi2",
            "slug": "uv-index-api2",
            "version": "0.0.1",
            "target": "py",
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
            "name": "daily",
            "short": "Daily UV Index forecast data.",
            "type": "`$ARRAY`",
          },
          {
            "name": "hourly",
            "short": "Hourly UV Index forecast data.",
            "type": "`$ARRAY`",
          },
          {
            "name": "latitude",
            "req": True,
            "short": "Latitude coordinate in decimal degrees.",
            "type": "`$NUMBER`",
          },
          {
            "name": "longitude",
            "req": True,
            "short": "Longitude coordinate in decimal degrees.",
            "type": "`$NUMBER`",
          },
          {
            "name": "meta",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "now",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "timezone",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "today",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "tomorrow",
            "req": True,
            "type": "`$OBJECT`",
          },
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
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "hourly",
                      "orig": "hourly",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "latitude",
                      "orig": "latitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
