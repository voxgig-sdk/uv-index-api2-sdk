# UvIndexApi2 SDK feature factory

from feature.base_feature import UvIndexApi2BaseFeature
from feature.test_feature import UvIndexApi2TestFeature


def _make_feature(name):
    features = {
        "base": lambda: UvIndexApi2BaseFeature(),
        "test": lambda: UvIndexApi2TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
