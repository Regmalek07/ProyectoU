from functools import _Wrapped
from typing import Any, Callable
from numpy import floating, ndarray as NDArray
from sympy.core.basic import Basic
from sympy.core.cache import cacheit
from sympy.core.function import Function, UndefinedFunction
from sympy.core.numbers import Float

class BesselBase(Function):
    @property
    def order(self) -> Basic:
        ...
    
    @property
    def argument(self) -> Basic:
        ...
    
    @classmethod
    def eval(cls, nu, z) -> None:
        ...
    
    def fdiff(self, argindex=...):
        ...
    


class besselj(BesselBase):
    _a = ...
    _b = ...
    @classmethod
    def eval(cls, nu, z) -> type[UndefinedFunction] | None:
        ...
    


class bessely(BesselBase):
    _a = ...
    _b = ...
    @classmethod
    def eval(cls, nu, z) -> None:
        ...
    


class besseli(BesselBase):
    _a = ...
    _b = ...
    @classmethod
    def eval(cls, nu, z) -> type[UndefinedFunction] | None:
        ...
    


class besselk(BesselBase):
    _a = ...
    _b = ...
    @classmethod
    def eval(cls, nu, z) -> type[UndefinedFunction] | None:
        ...
    


class hankel1(BesselBase):
    _a = ...
    _b = ...


class hankel2(BesselBase):
    _a = ...
    _b = ...


def assume_integer_order(fn) -> _Wrapped[..., Any, ..., Any | None]:
    ...

class SphericalBesselBase(BesselBase):
    def fdiff(self, argindex=...):
        ...
    


class jn(SphericalBesselBase):
    @classmethod
    def eval(cls, nu, z) -> None:
        ...
    


class yn(SphericalBesselBase):
    ...


class SphericalHankelBase(SphericalBesselBase):
    ...


class hn1(SphericalHankelBase):
    _hankel_kind_sign = ...


class hn2(SphericalHankelBase):
    _hankel_kind_sign = ...


def jn_zeros(n, k, method=..., dps=...) -> list[Any | Float] | list[Any | NDArray[Any, Any] | NDArray[floating[Any], Any] | tuple[Any, Any] | Any]:
    ...

class AiryBase(Function):
    def as_real_imag(self, deep=..., **hints) -> tuple[Any, Any]:
        ...
    


class airyai(AiryBase):
    nargs = ...
    unbranched = ...
    @classmethod
    def eval(cls, arg) -> None:
        ...
    
    def fdiff(self, argindex=...) -> type[UndefinedFunction]:
        ...
    
    @staticmethod
    @cacheit
    def taylor_term(n, x, *previous_terms):
        ...
    


class airybi(AiryBase):
    nargs = ...
    unbranched = ...
    @classmethod
    def eval(cls, arg) -> None:
        ...
    
    def fdiff(self, argindex=...) -> type[UndefinedFunction]:
        ...
    
    @staticmethod
    @cacheit
    def taylor_term(n, x, *previous_terms):
        ...
    


class airyaiprime(AiryBase):
    nargs = ...
    unbranched = ...
    @classmethod
    def eval(cls, arg) -> None:
        ...
    
    def fdiff(self, argindex=...):
        ...
    


class airybiprime(AiryBase):
    nargs = ...
    unbranched = ...
    @classmethod
    def eval(cls, arg) -> None:
        ...
    
    def fdiff(self, argindex=...):
        ...
    


class marcumq(Function):
    @classmethod
    def eval(cls, m, a, b) -> None:
        ...
    
    def fdiff(self, argindex=...):
        ...
    


