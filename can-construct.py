def can_construct (target: str, combos: list[str]) -> bool:
    # if target == "":
    #     return True
    # if target not in combos:
    #     return False
    for c in combos:
        print(c)
    return True


print(can_construct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))