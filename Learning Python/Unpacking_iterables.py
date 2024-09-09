def decorate_it(func):
	def wrapper(*args, **kwargs):
		print("args", ":- ", args) # Prints the Iterable
		print("*args", ":- ", *args) # Prints only values iniside the iterable
		print("kwargs", ":- ", kwargs) # Prints the dictionary
		print("*kwargs", ":- ", *kwargs) # Prints only the keys of dictionary
		print("*kwargs keys", ":- ", *kwargs.keys()) # Prints only the keys of dictionary
		print("*kwargs values", ":- ", *kwargs.values()) # Prints only the keys of dictionary
		print("*kwargs items", ":- ", *kwargs.items()) # Prints the items of dictionary
		func(*args, **kwargs)
		return func
	return wrapper

@decorate_it
def greet(name, greeting):
	print(f"{greeting}, {name}")

greet("John Doe", greeting="Hello")