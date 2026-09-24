# UvIndexApi2 SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Daily",
            "type": "`$ARRAY`",
            "short": "Daily UV Index forecast data.",
          },
          {
            "name": "hourly",
            "title": "Hourly",
            "type": "`$ARRAY`",
            "short": "Hourly UV Index forecast data.",
          },
          {
            "name": "latitude",
            "title": "Latitude",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Latitude coordinate in decimal degrees.",
          },
          {
            "name": "longitude",
            "title": "Longitude",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Longitude coordinate in decimal degrees.",
          },
          {
            "name": "meta",
            "title": "Meta",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "now",
            "title": "Now",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "ok",
            "title": "Ok",
            "type": "`$BOOLEAN`",
            "req": True,
          },
          {
            "name": "timezone",
            "title": "Timezone",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "today",
            "title": "Today",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "tomorrow",
            "title": "Tomorrow",
            "type": "`$OBJECT`",
            "req": True,
          },
        ],
        "name": "forecast",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/forecast",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "forecast",
                  },
                ],
                "parts": [
                  "api",
                  "v1",
                  "forecast",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "daily",
                      "orig": "daily",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "hourly",
                      "orig": "hourly",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "latitude",
                      "orig": "latitude",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "longitude",
                      "orig": "longitude",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "daily",
                    "hourly",
                    "latitude",
                    "longitude",
                    "timezone",
                  ],
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
