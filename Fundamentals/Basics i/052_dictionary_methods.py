dictionary = {
  'basket': [1, 2, 3]
  'greet': 'hello'
}

print(user['age']) # error: keyError

#  .get -> none, absence of bvalue
print(user.get('age'))

# another way to create a dictionary

user2 = dict(name='JohnJohn')
# we've created a user with this key/value pair
