# List Methods

# basket = [1, 2, 3, 4, 5]
# print(len(basket))


# a method can be specific to a data type

# ADDING
# print(basket.append(100))
# append changes the list in place, it doesn't produce a value

# insert
# basket.inser(index, ele)
# new_list = basket.insert(5, 100)
# print(basket) #=> [1, 2, 3, 4, 5, 100], this occurs because the chage happens to basket is not saved into new_list
# print(new_list) #=> None

#  extend
# new_list = basket.extend([100]) # => [1, 2, 3, 4, 5, 100]

# REMOVING
basket.pop() # pops off the last item in the list and returns the item removed
basket.pop(0) # the number refers to the index to be popped

basket.remove(4) # provide the value you want to remove

basket.clear() # => returns an array and removes everything in the list 
