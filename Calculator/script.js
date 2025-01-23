let btn = document.getElementsByClassName('items')
let ip = document.getElementById('Input')
let btn2 = document.getElementsByClassName('op')
let numArr = []
let opArr = []
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    let Num = numbers()
    ip.value += Num
  })
}
for (let i = 0; i < btn2.length; i++) {
  btn2[i].addEventListener('click', function () {
    let Op = numbers()
    ip.value += Op
  })
}
let Clear = document.getElementById('erase')
Clear.addEventListener('click', function () {
  ip.value = ''
})
let Back = document.getElementById('back-space')
Back.addEventListener('click', function () {
  let value = ip.value
  if (value) {
    ip.value = value.slice(0, -1)
  }
})
let Result = document.getElementById('result')
Result.addEventListener('click', function () {
  let value = ip.value.trim()

  const validPattern = /^[\d+\-*/().\s]+$/
  if (!validPattern.test(value)) {
    ip.value = 'Invalid: Contains invalid characters.'
    return
  }

  const consecutiveOps = /[+\-*/]{2,}/
  if (consecutiveOps.test(value)) {
    ip.value = 'Invalid: Consecutive operators are not allowed.'
    return
  }

  const invalidStartEnd = /^[+\-*/]|[+\-*/]$/
  if (invalidStartEnd.test(value)) {
    ip.value = 'Invalid: Cannot start or end with an operator.'
    return
  }

  let openParenCount = 0
  for (let char of value) {
    if (char === '(') openParenCount++
    if (char === ')') openParenCount--
    if (openParenCount < 0) {
      ip.value = 'Invalid: Unbalanced parentheses.'
      return
    }
  }
  if (openParenCount !== 0) {
    ip.value = 'Invalid: Unbalanced parentheses.'
    return
  }
  ip.value = eval(value)
})
