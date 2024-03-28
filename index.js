function longestCommonPrefix(strs) {
  if (!strs.length) return ''

  strs.sort((a, b) => a.length - b.length)
  
  const reference = strs[0]
  const referenceArray = reference.split('')
  let prefix = ''

  referenceArray.every((referenceChar, index) => {
    const isAllMatched = strs.every(str => str[index] === referenceChar)
    if (isAllMatched) {
        prefix += referenceChar

        return true
    } else {
        return false
    }
  })

  return prefix
}

// Test cases
const strs1 = [ 'flower', 'flow', 'flight' ]
const strs2 = [ 'dog', 'racecar', 'car' ]
const strs3 = [ 'reactnative', 'react', 'reactjs' ]

console.log(longestCommonPrefix(strs1))
console.log(longestCommonPrefix(strs2))
console.log(longestCommonPrefix(strs3))
