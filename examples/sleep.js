const sleep = (timeout) =>
  new Promise( (resolve,reject) =>
    setTimeout(resolve,timeout)
  )

const seconds = 1000

sleep(10*seconds)
.then( function() {
  console.log('10 secondes plus tard')
})

co = require('co')
co( function*() {
  yield sleep(10*seconds)
  console.log('10 secondes plus tard')
})
