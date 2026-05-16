package voxgiguvindexapi2sdk

import (
	"github.com/voxgig-sdk/uv-index-api2-sdk/core"
	"github.com/voxgig-sdk/uv-index-api2-sdk/entity"
	"github.com/voxgig-sdk/uv-index-api2-sdk/feature"
	_ "github.com/voxgig-sdk/uv-index-api2-sdk/utility"
)

// Type aliases preserve external API.
type UvIndexApi2SDK = core.UvIndexApi2SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type UvIndexApi2Entity = core.UvIndexApi2Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type UvIndexApi2Error = core.UvIndexApi2Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewForecastEntityFunc = func(client *core.UvIndexApi2SDK, entopts map[string]any) core.UvIndexApi2Entity {
		return entity.NewForecastEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewUvIndexApi2SDK = core.NewUvIndexApi2SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
