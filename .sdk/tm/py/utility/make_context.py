# UvIndexApi2 SDK utility: make_context

from core.context import UvIndexApi2Context


def make_context_util(ctxmap, basectx):
    return UvIndexApi2Context(ctxmap, basectx)
