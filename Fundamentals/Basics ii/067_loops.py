# LOOPS

# we can run lines over and over

# for variable in iterable: 
#   print variable

for letter in 'Zero to Mastery':
  print(letter)

# we can also use lists
for item in [1, 2, 3, 4, 5]:
  print(item)

# set
for number in {5, 4, 3, 2, 1}:
  print(number)

# tuple
for tup in (0, 9, 8, 7):
  print(tup)

# for loops allow us to iterate over a collection of items

# you can nest things in python, indentation matters
# explaination of nested loops

for num in (1, 2, 3, 4, 5):
  for x in ['a', 'b', 'c']:
    print(num, x)


