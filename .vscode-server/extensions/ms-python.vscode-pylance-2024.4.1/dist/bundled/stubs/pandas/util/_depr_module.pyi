from typing import Iterable

class _DeprecatedModule:
    deprmod = ...
    deprmodto = ...
    removals = ...
    moved = ...
    self_dir = ...
    def __init__(self, deprmod, deprmodto=..., removals=..., moved=...) -> None: ...
    def __dir__(self) -> Iterable[str]: ...
    def __getattr__(self, name: str): ...
