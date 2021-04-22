//   Write a function that takes in an array of strings and groups anagrams together.

//   Anagrams are strings made up of exactly the same letters, where order doesn't
//   matter. For example, cinema and iceman are anagrams
//   Your function should return a list of anagram groups in no particular order.

// words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

// Output = [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

// strategy
// iterate nested loop
// if the lengths of word1 is the same as word two feed it to helper

function anagrams(words) {
  let anagrams = [];

  for (let i = 0; i < words.length; i++) {
    let word1 = words[i]
    for (let j = i; j < words.length - 1; j++) {
      let word2 = words[j];

      if (word1.sort === word2.sort) {
        anagrams.push([word2]);
      }
    }
  }
  return anagrams;
}