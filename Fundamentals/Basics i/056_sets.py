# one last data type -> set
# lego blocks that build the foundation


# sets are simply an unordered collection of unique objects
# 

my_set = {1, 2, 3, 4, 5, 5}
print(my_set) # {1, 2, 3, 4, 5} -> it will not print out duplicates
# everything has to be unique

my_set.add(100)
my_set.add(2)

print(my_set) {1, 2, 3, 4, 5, 100} #it will not print out the 2 again

# return a collection of this list with unique values
my_list = [1, 2, 3, 4, 5, 5]

set(my_list) # -> {1, 2, 3, 4, 5}
# when is this useful
# collecting names, usernames, emails

# we cannot access values in a set by indexing
print(1 in my_set) # -> True
print(len(my_set)) # -> 5
print(list(my_set)) # -> [1, 2, 3, 4, 5]

new_set = my_set.copy()
my_set.clear()
print(new_set) # -> {1, 2, 3, 4, 5}
print(my_set) # -> set()
