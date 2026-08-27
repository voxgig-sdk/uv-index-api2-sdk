# UvIndexApi2 SDK configuration

module UvIndexApi2Config
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "UvIndexApi2",
        "slug" => "uv-index-api2",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://uvindexapi.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "forecast" => {},
        },
      },
      "entity" => {
        "forecast" => {
          "fields" => [
            {
              "name" => "daily",
              "short" => "Daily UV Index forecast data.",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "hourly",
              "short" => "Hourly UV Index forecast data.",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "latitude",
              "req" => true,
              "short" => "Latitude coordinate in decimal degrees.",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "longitude",
              "req" => true,
              "short" => "Longitude coordinate in decimal degrees.",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "meta",
              "req" => true,
              "type" => "`$OBJECT`",
            },
            {
              "name" => "now",
              "req" => true,
              "type" => "`$OBJECT`",
            },
            {
              "name" => "ok",
              "req" => true,
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "timezone",
              "req" => true,
              "type" => "`$OBJECT`",
            },
            {
              "name" => "today",
              "req" => true,
              "type" => "`$OBJECT`",
            },
            {
              "name" => "tomorrow",
              "req" => true,
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "forecast",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "daily",
                        "orig" => "daily",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "hourly",
                        "orig" => "hourly",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "latitude",
                        "orig" => "latitude",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "longitude",
                        "orig" => "longitude",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "timezone",
                        "orig" => "timezone",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/forecast",
                  "parts" => [
                    "api",
                    "v1",
                    "forecast",
                  ],
                  "select" => {
                    "exist" => [
                      "daily",
                      "hourly",
                      "latitude",
                      "longitude",
                      "timezone",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    UvIndexApi2Features.make_feature(name)
  end
end
