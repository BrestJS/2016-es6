let p = Promise.resolve()

p
.then( function () {
  return 1
}).then( function (result) {
  console.log( result === 1 )
})


Promise.resolve()
.then( function () {
  return Promise.resolve(1)
}).then( function (result) {
  console.log( result === 1 )
})

Promise.resolve()
.then( function () {
  throw new Error('oops')
}).catch( function (error) {
  console.log( error.message === 'oops' )
})
