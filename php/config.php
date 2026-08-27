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
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
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
              'short' => 'Daily UV Index forecast data.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'hourly',
              'short' => 'Hourly UV Index forecast data.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'latitude',
              'req' => true,
              'short' => 'Latitude coordinate in decimal degrees.',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'longitude',
              'req' => true,
              'short' => 'Longitude coordinate in decimal degrees.',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'meta',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'now',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'ok',
              'req' => true,
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'timezone',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'today',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'tomorrow',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'forecast',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'daily',
                        'orig' => 'daily',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'hourly',
                        'orig' => 'hourly',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'timezone',
                        'orig' => 'timezone',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/forecast',
                  'parts' => [
                    'api',
                    'v1',
                    'forecast',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
