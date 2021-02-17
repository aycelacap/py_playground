# js = objects, ruby = hash table, python = libraries
# Dictionary - unordered key/value pair, in other words, they are not located right next to each other in memory

# is a data type and data structure
# it's a way for us to organize our data structure

dictionary = {
  'a': [1, 2, 3, 4], # one spot in memory
  'b': 'i love you', # in another spot in memeory
  'c': True # may not be right next to each other
}

# in order for us to access any values 
print(dictionary['b'])

# if we put 'c' in plave of b, what will happen?
# ERROR ahhhhh

my_list = [
  {
    'a': [1, 2, 3],
    'b': "hello",
    'c': True
  },
  {
    'a': [4, 5, 6].
    'b': 'goodbye',
    'c': False
  } 

]

print(my_list[0]['a'][2]) #3
