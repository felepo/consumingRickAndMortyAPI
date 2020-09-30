const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Do someting async'), 3000)
      : reject(new Error('Test Error'))
  })
}

const doSomething = async () => {
  const somenthing = await doSomethingAsync()
  console.log(somenthing)
}

console.log('Before 1')
doSomething()
console.log('After 1')

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something)
  } catch (error) {
    console.error(error)
  }
}

console.log('Before 2')
anotherFunction()
console.log('After 2')
