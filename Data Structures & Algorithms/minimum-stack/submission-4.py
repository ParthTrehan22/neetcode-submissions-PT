class MinStack:

    def __init__(self):
        self.stack = [] 
        self.minimum_val = 2^31
        self.sorted_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        self.sorted_stack.append(val)
        self.sorted_stack.sort()
        if val < self.minimum_val :
            self.minimum_val = val

    def pop(self) -> None:
        popped_elem = self.stack.pop()
        popping_index = 0
        for index, ele in enumerate(self.sorted_stack):
            if ele == popped_elem:
                popping_index = index
        self.sorted_stack.pop(popping_index)
        return popped_elem

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.sorted_stack[0]