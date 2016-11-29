class Personne {
  constructor (name = 'cher ami·e') {
    this.name = name
  }
  greet () {
    return `Bonjour, ${this.name}.`
  }
  // again () =>  `Bonjour bonjour, ${this.name}!`
}
console.log( new Personne('Annie').greet() )
console.log( new Personne().greet() )
console.log( new Personne().constructor === Personne )
console.log( typeof Personne )
console.log( Personne.name )


class Client extends Personne {
  constructor (name) {
    super(name)
  }
}
console.log( new Client().greet() )
console.log( typeof Client.prototype )
console.log( new Client().constructor === Client )
