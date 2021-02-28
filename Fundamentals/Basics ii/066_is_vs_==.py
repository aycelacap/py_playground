# is vs ==
print(True == 1) #true bc numbers are true, remember print(bool(1))
print('' == 1) #false
print([] == 1) #false
print(10 == 10.0) #true
print([] == []) #true

print(True is True)
print('1' is '1')
print([] is []) #false lists are created in different locations in memory
print(10 is 10.0) #
print([1, 2, 3] is [1, 2, 3]) #diff location dude
