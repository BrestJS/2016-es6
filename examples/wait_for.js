const wait_for = (ev,name) =>
  new Promise( (resolve,reject) => {
    ev.once('error',reject)
    ev.once(name,resolve)
  })

EventEmitter = require('events')
co = require('co')

const ev = new EventEmitter()
co( function*() {
  yield wait_for(ev,'noël')
  console.log('Enfin!')
  yield livrer_les_cadeaux()
})

function livrer_les_cadeaux() {
  return Promise.resolve(true);
}

setTimeout( function() {
  ev.emit('noël')
}, 1000)
