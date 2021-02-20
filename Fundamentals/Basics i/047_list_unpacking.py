# list unpacking?

basket = [1, 2, 3]

a, b, c, *other, d = 1, 2, 3, 4, 5, 6, 7, 8, 9

print(a)
print(b)
print(c)
print(other) #[4, 5, 6, 7, 8, 9]
print(d)

# can we pack 123 in another?