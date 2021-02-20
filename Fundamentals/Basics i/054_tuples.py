# tuple - like lists but they are immutable
# they are immutable lists

my_tuple = (1, 2, 3, 4, 5)
# can we perform the following operation?
my_tuple[1] = 'z' # nah, this can't happen because tuples are immutable, it will exist as it was made 

# how can we access values of a tuple? 
print(my_tuple[1]) #this will print out  

# does 5 exist in my tuple?

print(5 in my_tuple) # True

# Why do we need Tuples?

# 1. if we don't need to be changed, it makes our cade safer and predictable
# you can't sort of reverse tuples and so they are more performant than lists 

# Lagitude and Longitude can be represented in a tuple, for the location of a specific area

user = {
  'basket': [1, 2, 3],
  'greet': 'hello',
  'age': 20,
  (1, 2) = [4, 5, 6]
}

print(user.items()) # dict_items([(key1, value1), (key2, value2), ...])

# remember: keys in dictionaries must be immutable
print(user[(1, 2)]) # -> [4, 5, 6]





