-- UvIndexApi2 SDK error

local UvIndexApi2Error = {}
UvIndexApi2Error.__index = UvIndexApi2Error


function UvIndexApi2Error.new(code, msg, ctx)
  local self = setmetatable({}, UvIndexApi2Error)
  self.is_sdk_error = true
  self.sdk = "UvIndexApi2"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function UvIndexApi2Error:error()
  return self.msg
end


function UvIndexApi2Error:__tostring()
  return self.msg
end


return UvIndexApi2Error
