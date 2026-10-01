"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "forecast",
        "accessor": "Forecast",
        "op": "list",
        "method": "GET",
        "path": "/api/v1/forecast",
        "args": [],
        "select": {
            "daily": "v1",
            "hourly": "v1",
            "latitude": "v1",
            "longitude": "v1",
            "timezone": "v1"
        },
        "headers": [],
        "query": [
            "latitude",
            "longitude",
            "timezone",
            "daily",
            "hourly"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "ok": true,
            "latitude": 1,
            "longitude": 1,
            "timezone": {
                "id": "x",
                "name": "x"
            },
            "now": {
                "date": "x",
                "time": "x",
                "uv_index": 1
            },
            "today": {
                "date": "x",
                "max": {
                    "time": "x",
                    "uv_index": 1
                }
            },
            "tomorrow": {
                "date": "x",
                "max": {
                    "time": "x",
                    "uv_index": 1
                }
            },
            "daily": [
                {
                    "date": "x",
                    "max": {
                        "time": "x",
                        "uv_index": 1
                    }
                }
            ],
            "hourly": [
                {
                    "date": "x",
                    "time": "x",
                    "uv_index": 1
                }
            ],
            "meta": {
                "license": {
                    "id": "x",
                    "name": "x",
                    "url": "x"
                },
                "source": {
                    "attribution": "x",
                    "url": "x"
                }
            }
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map