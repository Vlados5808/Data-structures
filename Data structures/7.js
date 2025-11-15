function pairss(pipa) {
  const pairs = { ')': '(', ']': '[', '}': '{' }  // відповідності закрив->відкр
  const stack = []

  for (const popa of pipa) {
    if (popa === '(' || popa === '[' || popa === '{') {
      stack.push(popa)               // зберігаємо відкриваючу скобку
    } else if (pairs[popa]) {
      if (stack.pop() !== pairs[popa]) return false // перевіряємо пару
    }
  }

  return stack.length === 0 // true якщо всі відкриті скобки закриті
}


console.log(pairss("()"))       
console.log(pairss("([{}])")) 
console.log(pairss("([)]"))      
console.log(pairss("(()"))       