//search package on npmjs.com
const supervillains = require('supervillains');
const superheroes = require('superheroes');

villainSize=supervillains.all.length
heroSize=superheroes.all.length

supervillains.all.forEach((item, i) => {
  console.log(item+" vs ("+superheroes.all[i]+" feat "+superheroes.all[heroSize-i]+")")
});

console.log(villainSize)
console.log(heroSize)
