# ProjectName SDK exists test

import pytest
from uvindexapi2_sdk import UvIndexApi2SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = UvIndexApi2SDK.test(None, None)
        assert testsdk is not None
