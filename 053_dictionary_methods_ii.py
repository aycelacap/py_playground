# how else can we look for items in a dictionary?

user = {
  'basket': [1, 2, 3]
  'greet': 'hello'
}

print('basket' in user) #True
print('hello' in user.keys()) #False
print('greet' in user.keys()) #True

# how can we grab items
print(user.items()) #this prints out a list of the key/value pairs, in tuple form


print(user.clear()) #None

# user.clear() # in place removes what the dictionary has
# print(user) # {}

user2 = user.copy()
print(user)
print(user2)
# the computer will make a copy of the user dictionary and it will be saved as user2


print(user.clear())
print(user2)
# this will return None because .clear will remove what the dictionary has and user2 will still print a list of tuples of the dictionary

print(user.pop('age')) #will print the dictionary without the popped value
# will user be mutated?

print(user)
# the method .pop mutates the dictionary in place so yes

# how can we update values to an existing dictionary?
print(user.update({
  'age': 55
}))

# this will also add a key/value to the existing dict
print(user.update({
  'ages': 125
}))