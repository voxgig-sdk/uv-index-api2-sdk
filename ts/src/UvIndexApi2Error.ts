
import { Context } from './Context'


class UvIndexApi2Error extends Error {

  isUvIndexApi2Error = true

  sdk = 'UvIndexApi2'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  UvIndexApi2Error
}

