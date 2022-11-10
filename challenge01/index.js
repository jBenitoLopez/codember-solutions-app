import colors from 'colors'
import fs from 'node:fs'

const rawdata = fs.readFileSync('challenge01/users.txt', 'utf8')

// data preparation
const data = rawdata
  .split('\n\n')
  .map(user => user
    .replaceAll('\n', ' ')
    .replaceAll('  ', ' ')
    .trim()
    .split(' ')
  )

// data validation
let usuariosValidos = []

data.filter(user => {
  let contain = []

  user.forEach((item) => {
    const codeval = item.split(':')

    if (['usr', 'eme', 'psw', 'age', 'loc', 'fll'].includes(codeval[0])
      && !(contain.includes(codeval[0]))) {
      contain.push(codeval[0])
    }
  })

  if (contain.length === 6) {
    usuariosValidos.unshift(user)
    return true
  }

  return false
})

const usr = usuariosValidos[0].find(item => item.startsWith('usr:')).split(':')[1]

console.log(colors.bgBrightWhite(` $ submit ${usuariosValidos.length}${usr} `))
