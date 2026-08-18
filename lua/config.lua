-- UvIndexApi2 SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "UvIndexApi2",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "hourly",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "latitude",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "longitude",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "meta",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "now",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "ok",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "timezone",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "today",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "tomorrow",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "forecast",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "daily",
                      ["orig"] = "daily",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "hourly",
                      ["orig"] = "hourly",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "latitude",
                      ["orig"] = "latitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "longitude",
                      ["orig"] = "longitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "timezone",
                      ["orig"] = "timezone",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/v1/forecast",
                ["parts"] = {
                  "api",
                  "v1",
                  "forecast",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
