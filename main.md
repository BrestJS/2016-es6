ES6 🍊
===
github.com / BrestJS / 2016-es6
by _shimaore_

introduction

ES6 ≡ ES2015

🌮 annuelle
🌴 github.com/tc39/ecma262

ES6 🍊

```javascript
class Personne {
  constructor (name = 'cher ami·e') {
    this.name = name
  }
  greet () {
    return `Bonjour, ${this.name}.`
  }
}
// typeof Personne === 'function'
// Personne.name === 'Personne'
// new Personne('Annie').greet()
//         === 'Bonjour, Annie.'
```

```
class Client extends Personne {
  constructor (name) {
    super(name)
  }
}
// new Client.greet()
//    === 'Bonjour, cher ami•e'
```

```javascript
const ready = (when) => when === 'now'
const api_ready = ready('now')
// api_ready === true
…
…
```

```javascript
const ready = (when) => when === 'now'
const api_ready = ready('now')
const api_ready = false
// SyntaxError: Identifier 'api_ready'
// has already been declared
```

```javascript
[4,3,2].filter( x => x*2 > 5 )
[4,3,2].map( (x,i) => x*i )
```

```javascript
for (let i = 0; i < a.length; i++) {
  let x = a[i]
}
// typeof i === 'undefined'
// typeof x === 'undefined'
```

```javascript
{
  function a() { return 1 }
  {
    function a() { return 2 }
  }
}
```

```javascript
class requête {
  get (url,cb) { cb('Bonjour') }
}
class app {
  constructor (name) { this.name = name }
  run () {
    new requête()
      .get('http://example.org', text =>
        console.log(`${text}, ${this.name}!`)
      )
  }
}
new App('Fanny').run()
```

🎄 🎅
==
* GET /personne → {nom,prénom}
* GET /liste → [article,…]
* GET /article?article=xyz → {description,prix}

```javascript
let result = ''
new requête()
.get('/personne', ({nom,prénom}) => {
  result += `Liste de noël pour ${prénom} ${nom}\n`
  new requête()
  .get('/liste', (liste) => {
    …
```

```
    …
    let reçus = 0;
    for (let article of liste) {
      new requête()
      .get('/article',{article}, ({description,prix}) => {
        reçus += 1
        result += `${reçus}. ${description} à ${prix}€\n`
})}})})
```

🌪
==
Liste de noël pour Fanny Dumoulin
1. Dictionnaire de latin à 36.57€
2. Mappemonde en bois à 42.42€
3. Joli vélo à 314.15€

```javascript
co = require('seem')
co( function* () {
  let result = ''
  let {nom,prénom} = yield new requête()
    .get('/personne')
  result += `Liste de noël pour ${prénom} ${nom}\n`
  …
```

```javascript
  …
  let liste = yield new requête()
    .get('/liste')
  let reçus = 0;
  for (let article of liste) {
    let {description,prix} = yield new requête()
        .get('/article',{article})
    reçus += 1
    result += `${reçus}. ${description} à ${prix}€\n`
  }
  console.log(result)
} )()
```

🌠
==
Liste de noël pour Fanny Dumoulin
1. Joli vélo à 314.15€
2. Mappemonde en bois à 42.42€
3. Dictionnaire de latin à 36.57€

Promises
--------

```
let p = Promise.resolve()
p
.then( function () {
  return 1
}).then( function (result) {
  // result === 1
})
```

```
let p = Promise.resolve()
p
.then( function () {
  return Promise.resolve(1)
}).then( function (result) {
  // result === 1
})
```

```
let p = new Promise()
p
.then( function () {
  throw new Error("bam")
}).catch( function (error) {
  // error.message === "bam"
})
```

Utiliser les Promises

```
promise.then( on_resolve )
promise.catch( on_reject )
promise.then( on_resolve,
              on_reject )
```

Créer des Promises

```
Promise.resolve( value )
Promise.reject( error )
new Promise( (resolve,reject) => )
```

```
const sleep = (timeout) =>
  new Promise( (resolve,reject) =>
    setTimeout(resolve,timeout)
  )
```

```
const sleep = (timeout) =>
  new Promise( (resolve,reject) =>
    setTimeout(resolve,timeout)
  )
sleep(10*seconds)
.then( function() {
  console.log('10 secondes plus tard')
})
```

```
const sleep = (timeout) =>
  new Promise( (resolve,reject) =>
    setTimeout(resolve,timeout)
  )
co( function*() {
  yield sleep(10*secondes)
  console.log('10 secondes plus tard')
})
```

```
const wait_for = (ev,name) =>
  new Promise( (resolve,reject) =>
    ev.once('error',reject)
    ev.once(name,resolve)
  )
```

```
const wait_for = (ev,name) =>
  new Promise( (resolve,reject) =>
    ev.once('error',reject)
    ev.once(name,resolve)
  )
co( function*() {
  yield wait_for(ev,'noël')
  console.log('Enfin!'')
  yield livrer_les_cadeaux()
})
ev.emit('noël')
```

`Map` is the new `{}`
---------------------
💓 performance!

```
let o = new Map()
o.set(key,val)
val = o.get(key)
for( let [key,val] of o.entries() )
  …
```

Destructuration
---------------

```
let [a,b] = [12,34]
let {c,d} = {c:12,d:34}
function example({a,b}) {…}
example({a:12,b:34})
```

```
[a,...b] = [12,34,42,56]
function example(...args) {…}
```

Utiliser
========

* Node.js 6.5+ → node.green/
* Babel → babeljs.io/docs/learn-es2015/
* regenerator (`function*()` sur pré-ES6)

```
# .babelrc
{
  "presets": [
      [ "es2015", { "modules": false } ]
    ],
   "plugins": [
     "transform-regenerator"
   ]
}
```

```
npm install --save-dev \
  babel-core babel-loader
  babel-plugin-transform-regenerator \
  babel-polyfill babel-preset-es2015
```

```
# using babel in webpack.config.js
module.exports = {
  …
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
}]}}
```

references.md

❁ Questions? ❁
==============
github.com / BrestJS / 2016-es6

❦ Merci! ❧
==========
github.com / BrestJS / 2016-es6
github.com / shimaore
