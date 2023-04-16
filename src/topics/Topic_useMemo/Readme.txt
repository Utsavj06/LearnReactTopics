step to use use Memo

1. first make a Component
2. make multiple variable using useState.
3. gernally component gets render on every changes in component.
4. we just make the function by using useMemo hook so that function could be render on change of particular variable which we want.

Example : from inde.js

1 we create two variable count and item in same Example.
2. we create two button for change the value of count and item.
3. we then create a function called multpy but it gets call on every change in component.
4. we put that function called multipy in useMemo variable called memoExample.
5. replace the function call in h3 i.e multipy() by variable named memoExample. 

all about use Memo.

