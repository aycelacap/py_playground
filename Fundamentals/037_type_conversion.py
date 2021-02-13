name = "Ayce"
age = 100
relationship_status = "complicated"
relationship_status = "single"

# create a program that can guess your age

birth_year = input("What year were you born?")
guess = 2020 - int(birth_year) 

print("your age is: {guess}")

# string interpolation and input from user as seen in video

# if confused 
print(type(birth_year))

# sometimes we store data into different data types. We need to convert data into different data types
# note:
bool
int
float
**complex
str
list
tuple
set
dict

age = 2019 - bool(birth_year)
# bool converts to true, 1, so your age would be 2018
# if false, 0

