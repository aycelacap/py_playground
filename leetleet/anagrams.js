//   Write a function that takes in an array of strings and groups anagrams together.

//   Anagrams are strings made up of exactly the same letters, where order doesn't
//   matter. For example, cinema and iceman are anagrams
//   Your function should return a list of anagram groups in no particular order.

// words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

// Output = [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
// think about data structure that will make solving the problem easier 

// strategy
// iterate nested loop
// if the lengths of word1 is the same as word two feed it to helper

// stacks, queues, hashes
// crash course on algoExpert -> watch all the videos 
// three problems a day on algoExpert
// if any problems take more than an hour, write it down 
// know how to think about a strategy
// make meeting with sami when i struggle with a list 
// reach out to Sami about my progress 
// take notes on the videos -> solve and see it in action



function anagrams(words) {
  let anagrams = [];

  for (let i = 0; i < words.length; i++) { //yo
    let word1 = words[i]
    // add a subarray 
    let same_anas = []; //
    for (let j = i; j < words.length; j++) { // 
      let word2 = words[j];

      if (word1.sort === word2.sort) {
        same_anas.push(word2); 
      }
    }
    anagrams.push(same_anas)
  }
  return anagrams;
}

// this is anagrams
// test native terminal