my_tuple = (1, 2, 3, 4, 5)
new_tuple = my_tuple[1:2] # -> returns a single item tuple (2,) it typically ends in a comma
new_tuple = my_tuple[1:4] # -> up to but not including -> (2, 3, 4)
print(new_tuple)

x = my_tuple[0]
y = my_tuple[1] 
# how can we shorten this?

x, y, z, *other = (1, 2, 3, 4, 5)

# x, y, and z will print single integers and other will print a list of the remaining values

# Tuple Methods!
#count()
#index()

print(my_tuple.count(5)) #how many 5s are there?
print(my_tuple.index(5)) #which index does 5 line in? -> 4

print(len(my_tuple))
