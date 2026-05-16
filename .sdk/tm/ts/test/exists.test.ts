
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UvIndexApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await UvIndexApi2SDK.test()
    equal(null !== testsdk, true)
  })

})
