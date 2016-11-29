class requête {
  get (url,params,cb) {
    if ( typeof params === 'function' )
      cb = params

    let res = new Promise( (resolve,reject) => {
      switch (url) {
        case '/personne':
          resolve({
            nom: 'Dumoulin',
            prénom: 'Fanny'
          })
          return
        case '/liste':
          resolve([
            'vélo'
          , 'mappemonde'
          , 'dictionnaire'
          ])
          return
        case '/article':
          switch (params.article) {
            case 'vélo': setTimeout( () => resolve({
                description: 'Joli vélo',
                prix: 314.15
              }),100); return
            case 'mappemonde': setTimeout( () => resolve({
                description: 'Mappemonde en bois',
                prix: 42.42
              }), 50); return
            case 'dictionnaire': resolve({
                description: 'Dictionnaire de latin',
                prix: 36.57
              })
          }
      }
    })
    if (cb) {
      res.then(cb,cb)
    } else {
      return res
    }
  }
}

let result = ''
new requête()
.get('/personne', ({nom,prénom}) => {
  result += `Liste de noël pour ${prénom} ${nom}\n`
  new requête()
  .get('/liste', (liste) => {
    let reçus = 0;
    for (let article of liste) {
      new requête()
      .get('/article',{article}, ({description,prix}) => {
        reçus += 1
        result += `${reçus}. ${description} à ${prix}€\n`
        if (reçus === liste.length)
          console.log(result)
      })
    }
  })
})

co = require('seem')
co( function* () {
  let result = ''
  let {nom,prénom} = yield new requête()
    .get('/personne')
  result += `Liste de noël pour ${prénom} ${nom}\n`
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
})()

/*
co = require('co')
co(function* () {
})
*/
