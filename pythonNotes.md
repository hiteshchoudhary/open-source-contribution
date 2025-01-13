Learn Python from [ChaiAurCode](https://www.youtube.com/@chaiaurcode)
## Python Notes:

### Variables:
Variables ek tarah ke containers hote hain jisme hum data store kar sakte hain.

```
number = 15
userName = "Ravi"
```
---

### Data-Types in Python:
**Number :-**

- Integer
- Floating Point
- Boolean
- Complex
  
**Sequences Type :-**

- String
- Lists
- Tuples
  
**Set**

**None**

**Mappings :-**

- Dictionary
---

### Mutable aur Immutable:
- **Mutable:** Ye woh data types hote hain jinhe hum change kar sakte hain. Inme changes karne se inka memory location change nahi hota. Example:- List, Dictionary, Set
- **Immutable:** Ye woh data types hote hain jinhe hum change nahi kar sakte. Inme koi bhi changes karne se inka memory location change ho jata hai. Example:- Integer, Float, String, Tuple
---

### Python Operators:
1. **Arithmetic Operators:** Ye basic mathematical operations perform karte hain.
    - Addition (+)
    - Subtraction (-):
    - Multiplication (*)
    - Division (/).
    - Modulus (%)
    - Exponentiation (**)
    - Floor division (//)
2. **Assignment Operators:** For assign values (=), (+=), (-=), (*=), (/=), (%=), (**=), (//=).
3. **Comparison Operators:** Ye do values ko compare karte hain aur boolean value (True ya False) return karte hain. Jaise ki (==), (!=), (>), (<), (>=), (<=).
4. **Logical Operators:** Ye logical conditions (and, or, not) check karte hain.
5. **Identity Operators:** Ye check karte hain ki do variables same object ko point kar rahe hain ya nahi. Jaise ki (is), (is not).
6. **Membership Operators:** Ye check karte hain ki koi value sequence (like list, tuple, etc.) me hai ya nahi. Jaise ki (in), (not in).
7. **Bitwise Operators:** Ye binary (bitwise) operations perform karte hain. Jaise ki (&), (|), (^), (~), (<<), (>>).
---

### Type Casting in Python:
```
int()
float()
ord()
hex()
oct()
tuple()
set()
list()
dict()
str()
complex(real, imag)
char(num) => Convert into ASCII Value
```
---

### Conditional Statements:
Python me hum conditions check karne ke liye use :-

- if
- elif
- else
- nested if
```
x = 5
if x > 10:
    print("x is greater than 10")
elif x < 10:
    print("x is less than 10")
else:
    print("x is 10")
```
---

### Loops in Python:
- for loop
- while loop
```
# For loop
for i in range(5):
    print(i)

# While loop
i = 0
while i < 5:
    print(i)
    i += 1
```
---

### Functions in Python:
```
def squareFinder(x):  # Function Defination
""" Return square of number """
return x ** 2

squareFinder(21) # Function call
```
#### Parameters
#### Arguments
- Default arguments
- Keyword arguments
- *args (Non-Keyword Arguments)
- **kwargs (Keyword Arguments)
#### Nested Function:
```
def f1():
	username = 'Ravi'
	def f2():
		print(username)
	f2()
f1()
```
#### Yield Function:
Any function that contains a yield keyword is termed a generator.

#### Lambda Function:
```
cube = lambda y: y*y*y
cube(49)
```
#### Pass and Comments:
```
# This is a single-line comment.

"""
This is a 
multi-line comment.
"""

def my_function(x):
  pass
```
---

### String in Python:
```
name = "Ravi"
middleName = 'Raj'
name[0] # Output: 'R'
name[1:3] # Slicing
fullName = name + middleName + 'Bhardwaj' # Concatenation
echo = 3 * 'Hello' # repetition
```
Method use with String:

- find( 'string', beg, end )
```
text = "Hello, World!"
index = text.find("World")
print(index)  # Output: 7
```
- `rfind()`  => last occourence of string
- `starwith( 'string', beg, end )`  => return true or false
- `endwith()` 
- `islower('string')`  => true or false
- `isupper('string')`  => true or false
- `lower()` 
- `upper()` 
- `swapcase()` 
- `title()` 
- `len()` 
- `count( 'string', beg, end )` 
- `centre()` 
- `join()` 
- `isalpha()`  => all char in string are alphabets
- `isalnum()` 
- `isspace()` 
- `rjust()`  `ljust()` 
- `min()`  `max()` 
- `strip()`  `lstrip()`  `rstrip()` 
- `maketrans`  and `translate` 
- `replace()` 
- `expandtabs()` 
- `split()` 
- `List commpersion` 
- `refindall()` , `search()` , `group()` 
---

### List in Python:
```
marks = [80, 50, 100, 85, 72]
marks[0] = 90
marks[1:4]
# list + list = list
```
**Methods use with Lists:**

- `append()` 
- `insert()` 
- `extend()` 
- `reversed()` 
- `remove()` 
- `pop()` 
- `clear()` 
- `index()` 
- `sort()` 
- `reverse()` 
- `copy()` 
- `del` 
### Tuple in Python:
```
tup = (1,2,3,4,5)
tup[0]
tup[1:3]
```
---

### Set in Python:
**Method use with set:**

- `set()` 
- `union()`  `update()` 
- `filter()` 
- `counter()` 
- `enumerate()` 
- `sorted()` 
- `add()` 
- `clear()` 
- `discard()` 
- `pop()` 
- `remove()` 
- `difference`  `difference update` 
- `frozenset()`  `intersection()` 
- `isdisjoint()`  `issubset()`  `issuperset()` 
---

### Dictonary in Python:
**Method use with dictonary:**

- `clear()` 
- `copy()` 
- `get()` 
- `items()` 
- `keys()` 
- `pop()` 
- `popitem()` 
- `update()` 
- `values()` 
- `str(dict)` 
- `len()` 
- `fromKeys(seq,value)` 
- `has_key()` 
- `get(key, def_value)` 
- `setddefault(key, def_value)` 
- `counter` 
### Switch case in Python:
Method 1:

```
def select(arg):
switcher = {
    0 : "zero"
    1 : "one"
    2 : "two"
}
return switcher.get(arg, "nothing")
```
**Method 2: Use if elif else**

**Method 3: Using class.**

**Method 4: Match**

```
def weekday(n):
   match n:
      case 0: return "Monday"
      case 1: return "Tuesday"
      case 2: return "Wednesday"
      case 3: return "Thursday"
      case 4: return "Friday"
      case 5: return "Saturday"
      case 6: return "Sunday"
      case _: return "Invalid day number"
print (weekday(3))
print (weekday(6))
```
---

### Error Handling in Python:
Error in Python can be of two types: **1. Syntax Error** **2. Exceptions**

#### Try-Except-Finally
- **"Try"** block mein wo code likha jata hai jahan hume lagta hai ki koi error ho sakta hai.
- **"Except"** block mein hum wo code likhte hain jo tab execute hoga jab "try" block mein koi error aata hai.
- **"Finally"** block mein wo code likha jata hai jo har halat mein execute hona chahiye, chahe error aaye ya na aaye.
```
try:
    # Try block
    num = int(input("Ek number daalo: "))
except ValueError:
    # Except block
    print("Bhai sahab, number hi daalo!")
finally:
    # Finally block
    print("Ye line toh print hogi hi!")
```
#### Built in Exceptions:
- **Base Exceptions:**
    - `BaseException` : Parent class for all built-in exceptions.
    - `Exception` : Base class for user-defined exceptions.
    - `ArithmeticError` : Base class for arithmetic errors.
        - `OverflowError` : Result of an arithmetic operation is out of range.
        - `ZeroDivisionError` : Division by zero.
        - `FloatingPointError` : Floating point error.
    - `BufferError` : Related to buffer operations.
    - `LookupError` : Invalid key or index.
        - `KeyError` : Invalid key in a mapping.
        - `IndexError` : Invalid index in a sequence.
- **Concrete Exceptions:**
    - `AssertionError` : Assertion failed.
    - `AttributeError` : Non-existent attribute.
    - `EOFError` : End-of-file condition.
    - `FloatingPointError` : Floating point error.
    - `GeneratorExit` : Generator or coroutine closed.
    - `ImportError` : Module import failure.
    - `ModuleNotFoundError` : Module not found.
    - `IndexError` : Sequence index out of range.
    - `KeyError` : Mapping key not found.
    - `KeyboardInterrupt` : User hits interrupt key (e.g., Ctrl-C).
    - `MemoryError` : Memory is exhausted.
    - `NameError` : Local or global name not found.
    - `NotImplementedError` : Abstract method not implemented.
    - `OSError` : System-related error, including I/O failures.
    - `OverflowError` : Result of an arithmetic operation is out of range.
    - `RecursionError` : Maximum recursion depth exceeded.
    - `ReferenceError` : Weak reference proxy used to access referent after garbage collection.
    - `RuntimeError` : No other exception applies.
    - `StopIteration` : All items from an iterator have been exhausted.
    - `SyntaxError` : Syntax error.
    - `SystemError` : Interpreter internal error.
    - `SystemExit` : sys.exit() function called.
    - `TypeError` : Operation or function applied to an object of inappropriate type.
    - `UnboundLocalError` : Local variable referenced before assignment.
    - `UnicodeError` : Unicode encoding or decoding error.
    - `ValueError` : Invalid value for an operation or function.
    - `ZeroDivisionError` : Division by zero.
#### NZEC [Non Zero Exit Code]
- Ye error tab ata hai jab koi programe successfully terminate na ho or crash ho jay.
- Error tab ata hai jab koi unexpected error ata hai jise humne handel nhi kiye hota hai.
---

### File Handeling in Python:
```
f = open(filename, mode)
```
read() mode

```
f.read('string')
```
write() mode

```
f = open("test.txt", 'w')
f.write('string')
f.close()
```
append()

with() function

```
with open('file.txt', 'r') as file:
data = file.read()
```
---

### OOPS in Python:
OOPs ya **Object Oriented Programming** system ek programming paradigm hai jo objects aur classes par based hota hai. Python me OOPs ka use karke hum code ko reusable aur scalable banate hai.

Chalo, isko samajhte hai real life example ke sath:

1. **Class**: Class ek blueprint ya template hota hai. Jaise real life me ek building ka blueprint hota hai, usi tarah class ek object ka blueprint hota hai. Jaise, hum ek 'Car' class bana sakte hai jisme car ki properties jaise color, brand, speed etc. aur methods jaise start, stop, accelerate etc. define kar sakte hai.
```
class Car:
def __init__(self, color, brand):
    self.color = color
    self.brand = brand

def start(self):
    print("Car is starting")

def stop(self):
    print("Car is stopping")
```
1. **Object**: Object class ka instance hota hai. Jaise blueprint se building banate hai, usi tarah class se objects banate hai. Jaise, hum 'Car' class se different car objects bana sakte hai.
```
car1 = Car('Red', 'Toyota')
car2 = Car('Blue', 'Honda')
```
2. **Inheritance**: Inheritance ek tarah ka mechanism hai jisse ek class dusri class ki properties aur methods inherit ya use kar sakti hai. Jaise, hum ek 'ElectricCar' class bana sakte hai jo 'Car' class ki properties aur methods inherit karegi aur kuch new properties aur methods add karegi.
```
class ElectricCar(Car):
def __init__(self, color, brand, battery_capacity):
    super().__init__(color, brand)
    self.battery_capacity = battery_capacity

def charge(self):
    print("Car is charging")
```
3. **Polymorphism**: Polymorphism se hum ek hi interface se different methods ko call kar sakte hai. Jaise, hum 'start' method ko 'Car' aur 'ElectricCar' dono objects par call kar sakte hai.
```
car1.start()  # prints "Car is starting"
electric_car1 = ElectricCar('Green', 'Tesla', 100)
electric_car1.start()  # prints "Car is starting"
```
4. **Encapsulation**: Encapsulation se hum data ko hide kar sakte hai. Jaise, hum 'Car' class me 'speed' variable ko private bana sakte hai jisse wo sirf 'Car' class ke andar hi accessible ho.
```
class Car:
def __init__(self, color, brand):
    self.color = color
    self.brand = brand
    self.__speed = 0
```
5. **Data Abstraction**: A basic principle of OOP
