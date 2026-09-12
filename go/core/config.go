package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "UvIndexApi2",
			"slug": "uv-index-api2",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://uvindexapi.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"forecast": map[string]any{},
			},
		},
		"entity": map[string]any{
			"forecast": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "daily",
						"short": "Daily UV Index forecast data.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "hourly",
						"short": "Hourly UV Index forecast data.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "latitude",
						"req": true,
						"short": "Latitude coordinate in decimal degrees.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "longitude",
						"req": true,
						"short": "Longitude coordinate in decimal degrees.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "meta",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "now",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "timezone",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "today",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tomorrow",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "forecast",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "daily",
											"orig": "daily",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "hourly",
											"orig": "hourly",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "latitude",
											"orig": "latitude",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "timezone",
											"orig": "timezone",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/forecast",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "forecast",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"daily",
										"hourly",
										"latitude",
										"longitude",
										"timezone",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"v1",
									"forecast",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
