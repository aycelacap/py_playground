# ODD SUMS
# js presentations
​
# Write a method that takes an array of numbers and returns the sum of all
# odd numbers in the array.
#
# The method is expected to return an INTEGER
# The method accepts a 'numbers' array as a parameter

def odd_sums(numbers)

    # initialize a running total = 0
    # iterate the numbers array
    # if num % 2 == 0
        # add to the running total

    # return total by the end

  
end

puts odd_sums([3, 6, 8, 9, 1]) # => 13







​
def odd_sums(numbers) # [3, 6, 8, 9, 1]
    odd_sum = 0
​
    numbers.each do |num|
        if num % 2 != 0
            odd_sum += num # 3 +  9 -> 12, 12 + 1 -> 13
        end
    end
​
    return odd_sum # 13
end
​
​


