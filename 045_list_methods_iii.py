# lists have a lot of methods 

basket = ['a', 'b', 'c', 'd', 'a']
basket.sort() #this performs the action in place
print(basket) # this will sort the basket in alphabetical order

# this can also work to sort
print(sorted(basket)) #this creates a new instance of basket
print(basket) #this doesn't change the OG list 

# if we are interested in copying, we can use the #.copy method
# #.reverse(), reverses the order

