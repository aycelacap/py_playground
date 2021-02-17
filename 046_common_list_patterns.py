# List patterns

basket = ['a', 'b', 'c', 'd', 'a', 'a', 'b']
print(len(basket)) # 7
basket.sort()
basket.reverse()

# What is another way to reverse?
print(basket[::-1]) # hm, is this true?, yes, this creates a copy and reverses, DOES NOT MUTATE THE LIST
print(basket) #prints out the result of the last method (if the method changes the list in place)

# range(start, stop)
print(range(1, 100)) # literally prints out range(1, 100)

# however print(list(range(100))), prints numbers 1 through 99 in an array, before it hits 100, it will stop

# what is a join?
sentence = ":)"

sentence.join(['hi', 'i', 'love', 'you'])
# we get ':)' between the iterable items in the list

