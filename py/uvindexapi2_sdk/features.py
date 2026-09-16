# UvIndexApi2 SDK feature factory

from uvindexapi2_sdk.feature.base_feature import UvIndexApi2BaseFeature
from uvindexapi2_sdk.feature.ratelimit_feature import UvIndexApi2RatelimitFeature
from uvindexapi2_sdk.feature.retry_feature import UvIndexApi2RetryFeature
from uvindexapi2_sdk.feature.test_feature import UvIndexApi2TestFeature
from uvindexapi2_sdk.feature.timeout_feature import UvIndexApi2TimeoutFeature


_FEATURES = {
    "base": lambda: UvIndexApi2BaseFeature(),
    "ratelimit": lambda: UvIndexApi2RatelimitFeature(),
    "retry": lambda: UvIndexApi2RetryFeature(),
    "test": lambda: UvIndexApi2TestFeature(),
    "timeout": lambda: UvIndexApi2TimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
