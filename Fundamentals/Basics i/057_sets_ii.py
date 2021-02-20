my_set = {1, 2, 3, 4, 5}
your_set = {4, 5, 6, 7, 8, 9}

#.difference() -> we can compare 2 sets against one another
print(my_set.difference(your_set)) # {1, 2, 3}
# my_set has {1, 2, 3} and your set doesnt have that

# .discard() 
print(my_set.discard(5)) # None
print(my_set) # {1, 2, 3, 4}

# difference_update() -> remove elemts of another set from this set
print(my_set.difference_update(your_set))
print(my_set) # {1, 2, 3}

# .intersection() -> which values are shared among the two sets?

# .isdisjoint() -> Do these sets have nothing in common?

# .union() combines 2 sets together, united sets together

# .issubset() tid the entirety of my set in your set? 

# .superset() is my set a superset of your set?