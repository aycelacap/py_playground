input('jayjay')
input('secret')

print('{username} password {secret} is {******} letters long')

username = input("what is your username?")
password = input("what is your password?")


print(f'{username}, your password, {password} is {len(password} letters long')
print('*' * len('secret'))

password_length = len(password)
hidden_password = '*' * password_length

print(f'{username}, your password, {hidden_password} is {password_length} characters long')
# the idea of readability is demonstrated above 
