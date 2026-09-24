<?php
declare(strict_types=1);

// UvIndexApi2 SDK configuration

class UvIndexApi2Config
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "UvIndexApi2",
                "slug" => "uv-index-api2",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://uvindexapi.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "forecast" => [],
                ],
            ],
            "entity" => [
        'forecast' => [
          'fields' => [
            [
              'name' => 'daily',
              'title' => 'Daily',
              'type' => '`$ARRAY`',
              'short' => 'Daily UV Index forecast data.',
            ],
            [
              'name' => 'hourly',
              'title' => 'Hourly',
              'type' => '`$ARRAY`',
              'short' => 'Hourly UV Index forecast data.',
            ],
            [
              'name' => 'latitude',
              'title' => 'Latitude',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'Latitude coordinate in decimal degrees.',
            ],
            [
              'name' => 'longitude',
              'title' => 'Longitude',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'Longitude coordinate in decimal degrees.',
            ],
            [
              'name' => 'meta',
              'title' => 'Meta',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'now',
              'title' => 'Now',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'ok',
              'title' => 'Ok',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
            [
              'name' => 'timezone',
              'title' => 'Timezone',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'today',
              'title' => 'Today',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'tomorrow',
              'title' => 'Tomorrow',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
          ],
          'name' => 'forecast',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/forecast',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'forecast',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'v1',
                    'forecast',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'daily',
                        'orig' => 'daily',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'hourly',
                        'orig' => 'hourly',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'timezone',
                        'orig' => 'timezone',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'daily',
                      'hourly',
                      'latitude',
                      'longitude',
                      'timezone',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return UvIndexApi2Features::make_feature($name);
    }
}
