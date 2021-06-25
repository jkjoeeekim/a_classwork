# Problem 1:
# Given a pattern and a string str, determine if str follows the same pattern.
# Example 1
# Input: pattern = "abba", str = "dog cat cat dog"
# Output: true
# Example 2
# Input: pattern = "abba", str = "dog cat cat fish"
# Output: false
# Example 3
# Input: pattern = "aaaa", str = "dog cat cat dog"
# Output: false
# Example 4
# Input: pattern = "abba", str = "dog dog dog dog"
# Output: false
# You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space. Can you solve it in O(N) time and O(1) space?

def check_pattern(pattern, sentence)
  return false if pattern.length != sentence.split(" ").length

  words = sentence.split(" ")
  new_hash = {}
  used_words = []

  pattern.split("").each_with_index do |key, idx| # a, b, b, a
    if new_hash[key]
      return false unless new_hash[key] == words[idx]
    else
      new_hash[key] = words[idx]
      used_words.include?(words[idx]) ? (return false) : used_words << words[idx]
    end
  end
  true
end
p check_pattern("abba", "dog cat cat dog")
p check_pattern("abba", "dog cat cat fish")
p check_pattern("aaaa", "dog cat cat dog")
p check_pattern("abba", "dog dog dog dog")

# Problem 2:
# Given two strings S and T, return if they are equal when both are typed into empty text editors. In this case, # indicates a backspace character.
# Example 1
# Input: S = "ab#c", T = "ad#c"
# Output: true
# Explanation: Both S and T become "ac".
# Example 2
# Input: S = "ab##", T = "c#d#"
# Output: true
# Explanation: Both S and T become "".
# Example 3
# Input: S = "a##c", T = "#a#c"
# Output: true
# Explanation: Both S and T become "c".
# Example 4
# Input: S = "a#c", T = "b"
# Output: false
# Explanation: S becomes "c" while T becomes "b".
# Note:
# 1. 1 <= S.length <= 200
# 2. 1 <= T.length <= 200
# 3. S and T only contain lowercase letters and '#' characters.
# Can you solve it in O(N) time and O(1) space?