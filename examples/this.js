class requête {
  get (url,cb) {
    cb('Bonjour')
  }
}

class App {
  constructor (name) {
    this.name = name
  }
  run () {
    new requête().get('http://example.org', (text) => {
      console.log(`${text}, ${this.name}!`)
    })
  }
}

new App('Fanny').run()
console.log( requête.name )

class App2 {
  constructor (name) {
    this.name = name
  }
  run () {
    new requête().get('http://example.org', text =>
      console.log(`${text}, ${this.name}!`)
    )
  }
}

new App2('Fanny').run()

class App3 {
  constructor (name) {
    this.name = name
  }
  run () {
    let self = this;
    new requête().get('http://example.org', function(text) {
      console.log(`${text}, ${self.name}!`)
    })
  }
}

new App3('Fanny').run()
