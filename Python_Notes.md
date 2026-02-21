# BTS of Iteration in Python
> Note: These notes are self-written based on concepts learned from [Chai Aur Python](https://www.youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s) by *Hitesh Choudhary*

Firstly we have to understand the two confusing terms `Iterator` and `Iterable`

### Iterable vs Iterator

- **Iterable** → Object that can return an iterator (`__iter__()` method).
- **Iterator** → Object that produces values one by one (`__next__()` method).

Iteration in Python is driven by protocols, not syntax.

- for loops, file reading, generators, and comprehensions all rely on:

    - `__iter__()`

    - `__next__()`

    - `StopIteration`

- When we write:
``` python
myList = [1,2,3,4]
for l in myList:
    print(l)
```

- Internally, it is done as:
``` python
I = iter(myList) # Step 1: create an iterator
while True: # Step 2: keeps pulling values
    try:
        x = next(I) # calls __next__()
    except StopIteration:  # Step 3: end of iteration
        break
    print(x)
```

- Because a `list` is an **iterable**, not an iterator, we can create a new iterator each time we loop over it.
- However, a `file` object behaves differently once exhausted.