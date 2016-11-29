let [a,b] = [12,34]
console.log( a === 12 )
console.log( b === 34 )
let {c,d} = {c:12,d:34}
console.log( c === 12 )
console.log( d === 34 )
function example({a,b}) {
  console.log( a === 12 )
  console.log( b === 34 )
}
example({a:12,b:34})

let [e,...f] = [12,34,42,56]
console.log( e === 12 )
console.log( f.length === 3 )
function example2(...args) {
  console.log( args[0] === 12 )
}
example2(12,34)
