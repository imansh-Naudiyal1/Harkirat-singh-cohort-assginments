/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const normalize = str => str.replace(/\s/g, '').toLowerCase();
  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) return false;
  const sorted1 = s1.split('').sort().join('');
  const sorted2 = s2.split('').sort().join('');

  return sorted1 === sorted2;
}

module.exports = isAnagram;