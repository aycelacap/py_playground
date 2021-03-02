# iterable - a collection of keys that can be iterated over
# one by one to check each item in the collection
# looping over, or iterating over a collection of data, strings, lists, tuples, strings
# sets

# How can we iterate over an object

user = {
  "name": 'Golem',
  "age": 5006,
  "can_swim": False
}

# we can access the keys by using for in
for key in user:
  print(key)

# how can we access keys, values? returns tuples of strings
for item in user.items():
  print(item)

# how can we access values alone?
for item in user.values():
  print(item)

# access only keys
for item in user.keys():
  print(item)

# how to print key, value separately?
for key, value in user:
  print(key, value)




