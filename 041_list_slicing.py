string = "hello"
string[0:2:1]

# string[start:stop:step]

# we can apply the concept of string slicing to lists
#  lists are mutable

# with list slicing, we create a new copy listlists are mutable

amazon_cart = new_cart 
# these two variable would point on the same place in memory


# if instead we want to copy a list, they now point to different spot in memory
new_cart = amazon_cart[:]

