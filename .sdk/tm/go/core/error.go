package core

type UvIndexApi2Error struct {
	IsUvIndexApi2Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewUvIndexApi2Error(code string, msg string, ctx *Context) *UvIndexApi2Error {
	return &UvIndexApi2Error{
		IsUvIndexApi2Error: true,
		Sdk:              "UvIndexApi2",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *UvIndexApi2Error) Error() string {
	return e.Msg
}
