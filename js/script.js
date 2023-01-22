const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  // const today = '14/01'
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert('Dia já incluso')
    return //para a execução da função
  }
  nlwSetup.addDay(today)
}
function save() { // salvando no localStorage
  localStorage.setItem('nlwSetup@data', JSON.stringify(nlwSetup.data)) 
}

// carregando os dados
const data = JSON.parse(localStorage.getItem('nlwSetup@data')) || {}
nlwSetup.setData(data)
nlwSetup.load()