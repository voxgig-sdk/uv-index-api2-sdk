
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UvIndexApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = UvIndexApi2SDK.test()
    equal(testsdk instanceof UvIndexApi2SDK, true,
      'UvIndexApi2SDK.test() must return a client synchronously')
  })

})
