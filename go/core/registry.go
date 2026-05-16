package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewForecastEntityFunc func(client *UvIndexApi2SDK, entopts map[string]any) UvIndexApi2Entity

