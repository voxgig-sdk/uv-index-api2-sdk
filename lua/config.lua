-- UvIndexApi2 SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "UvIndexApi2",
      slug = "uv-index-api2",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://uvindexapi.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["forecast"] = {},
      },
    },
    entity = {
      ["forecast"] = {
        ["fields"] = {
          {
            ["name"] = "daily",
            ["title"] = "Daily",
            ["type"] = "`$ARRAY`",
            ["short"] = "Daily UV Index forecast data.",
          },
          {
            ["name"] = "hourly",
            ["title"] = "Hourly",
            ["type"] = "`$ARRAY`",
            ["short"] = "Hourly UV Index forecast data.",
          },
          {
            ["name"] = "latitude",
            ["title"] = "Latitude",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Latitude coordinate in decimal degrees.",
          },
          {
            ["name"] = "longitude",
            ["title"] = "Longitude",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Longitude coordinate in decimal degrees.",
          },
          {
            ["name"] = "meta",
            ["title"] = "Meta",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "now",
            ["title"] = "Now",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "ok",
            ["title"] = "Ok",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
          },
          {
            ["name"] = "timezone",
            ["title"] = "Timezone",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "today",
            ["title"] = "Today",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "tomorrow",
            ["title"] = "Tomorrow",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
        },
        ["name"] = "forecast",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/v1/forecast",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "forecast",
                  },
                },
                ["parts"] = {
                  "api",
                  "v1",
                  "forecast",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "daily",
                      ["orig"] = "daily",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "hourly",
                      ["orig"] = "hourly",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "latitude",
                      ["orig"] = "latitude",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "longitude",
                      ["orig"] = "longitude",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "timezone",
                      ["orig"] = "timezone",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "daily",
                    "hourly",
                    "latitude",
                    "longitude",
                    "timezone",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
