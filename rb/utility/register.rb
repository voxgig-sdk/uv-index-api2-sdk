# UvIndexApi2 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

UvIndexApi2Utility.registrar = ->(u) {
  u.clean = UvIndexApi2Utilities::Clean
  u.done = UvIndexApi2Utilities::Done
  u.make_error = UvIndexApi2Utilities::MakeError
  u.feature_add = UvIndexApi2Utilities::FeatureAdd
  u.feature_hook = UvIndexApi2Utilities::FeatureHook
  u.feature_init = UvIndexApi2Utilities::FeatureInit
  u.fetcher = UvIndexApi2Utilities::Fetcher
  u.make_fetch_def = UvIndexApi2Utilities::MakeFetchDef
  u.make_context = UvIndexApi2Utilities::MakeContext
  u.make_options = UvIndexApi2Utilities::MakeOptions
  u.make_request = UvIndexApi2Utilities::MakeRequest
  u.make_response = UvIndexApi2Utilities::MakeResponse
  u.make_result = UvIndexApi2Utilities::MakeResult
  u.make_point = UvIndexApi2Utilities::MakePoint
  u.make_spec = UvIndexApi2Utilities::MakeSpec
  u.make_url = UvIndexApi2Utilities::MakeUrl
  u.param = UvIndexApi2Utilities::Param
  u.prepare_auth = UvIndexApi2Utilities::PrepareAuth
  u.prepare_body = UvIndexApi2Utilities::PrepareBody
  u.prepare_headers = UvIndexApi2Utilities::PrepareHeaders
  u.prepare_method = UvIndexApi2Utilities::PrepareMethod
  u.prepare_params = UvIndexApi2Utilities::PrepareParams
  u.prepare_path = UvIndexApi2Utilities::PreparePath
  u.prepare_query = UvIndexApi2Utilities::PrepareQuery
  u.graphql_body = UvIndexApi2Utilities::GraphqlBody
  u.graphql_errors = UvIndexApi2Utilities::GraphqlErrors
  u.result_basic = UvIndexApi2Utilities::ResultBasic
  u.result_body = UvIndexApi2Utilities::ResultBody
  u.result_headers = UvIndexApi2Utilities::ResultHeaders
  u.transform_request = UvIndexApi2Utilities::TransformRequest
  u.transform_response = UvIndexApi2Utilities::TransformResponse
}
