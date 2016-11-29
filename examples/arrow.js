console.log( [4,3,2].filter( x => x*2 > 5 ) )
console.log( [4,3,2].map( (x,i) => x*i ) )

const ready = (now) => {
  45*now
}
console.log( ready(63) )

const ready_2 = (now) => {
  return 45*now
}
console.log( ready_2(63) )

const me = p => this.a * p
console.log( me.call( {a:3}, 3 ) )
