<?php
declare(strict_types=1);

// UvIndexApi2 SDK configuration

class UvIndexApi2Config
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "UvIndexApi2",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'hourly',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'latitude',
              'req' => true,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'longitude',
              'req' => true,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'meta',
              'req' => true,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'now',
              'req' => true,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'ok',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'timezone',
              'req' => true,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'today',
              'req' => true,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'tomorrow',
              'req' => true,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 9,
            ],
          ],
          'name' => 'forecast',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'daily',
                        'orig' => 'daily',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'hourly',
                        'orig' => 'hourly',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'timezone',
                        'orig' => 'timezone',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
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
