# ODD SUMS
# js presentations
​
# Write a method that takes an array of numbers and returns the sum of all
# odd numbers in the array.
#
# The method is expected to return an INTEGER
# The method accepts a 'numbers' array as a parameter

def odd_sums(numbers)
  # init a var for sum
  # iterate over num array
  # have a condition for finding odd numbers
  # add those numbers to sum
  # return 
  
end









​
def odd_sums(numbers) #[3, 6, 8, 9, 1]
    odd_sum = 0
​
    numbers.each do |num|
        if num % 2 != 0
            odd_sum += num #13
        end
    end
​
    return odd_sum # 13
end
​
​
puts odd_sums([3, 6, 8, 9, 1]) # => 13

