let dataArr = []

function Data ({ id, teamOne, teamTwo, date, type, scoreOne, scoreTwo }) {
  this.id = id
  this.teamOne = teamOne
  this.teamTwo = teamTwo
  this.date = date
  this.type = type
  this.scoreOne = scoreOne
  this.scoreTwo = scoreTwo
}

const addData = (e) => {
  e.preventDefault()
  const teamOne = document.getElementById('team1').value
  const teamTwo = document.getElementById('team2').value
  let scoreOne
  let scoreTwo
  if (document.getElementById('score1')) {
    scoreOne = document.getElementById('score1').value
  } else {
    scoreOne = null
  }
  if (document.getElementById('score2')) {
    scoreTwo = document.getElementById('score2').value
  } else {
    scoreTwo = null
  }
  const date = document.getElementById('date').value
  const type = document.getElementById('type').value
  let id
  if (dataArr.length === 0) {
    id = 1
  }
  else {
    id = dataArr[dataArr.length - 1].id + 1
  }
  const obj = new Data({ id, teamOne, teamTwo, date, type, scoreOne, scoreTwo })
  dataArr = [...dataArr, obj]
  document.getElementById('team1').value = ''
  document.getElementById('team2').value = ''
  if (document.getElementById('score1')) {
    document.getElementById('score1').value = ''
  }
  if (document.getElementById('score2')) {
    document.getElementById('score2').value = ''
  }
  document.getElementById('date').value = ''
  document.getElementById('type').value = ''
  if (document.getElementById('score2')) {
    form.removeChild(document.getElementById('score1label'))
    form.removeChild(document.getElementById('score2'))
  }
  if (document.getElementById('score1')) {
    form.removeChild(document.getElementById('score2label'))
    form.removeChild(document.getElementById('score1'))
  }
  generateCards()
}

function createScoreInput () {
  const dateType = document.querySelector('.dateType')
  if (!document.getElementById('score1')) {
    if (this.value === 'recent') {
      const scoreOneLabel = document.createElement('label')
      scoreOneLabel.textContent = 'Enter Team 1 Score'
      scoreOneLabel.id = 'score1label'
      const scoreTwoLabel = document.createElement('label')
      scoreTwoLabel.textContent = 'Enter Team 2 Score'
      scoreTwoLabel.id = 'score2label'
      scoreOneLabel.htmlFor = 'score1'
      scoreTwoLabel.htmlFor = 'score2'
      const scoreOne = document.createElement('input')
      scoreOne.type = 'number'
      const scoreTwo = document.createElement('input')
      scoreTwo.type = 'number'
      scoreOne.id = 'score1'
      scoreTwo.id = 'score2'
      scoreOne.required = true
      scoreTwo.required = true
      form.insertBefore(scoreOneLabel, dateType)
      form.insertBefore(scoreOne, dateType)
      form.insertBefore(scoreTwoLabel, dateType)
      form.insertBefore(scoreTwo, dateType)
    }
  }
}

function createCard (obj) {
  const cardDiv = document.createElement('div')
  cardDiv.id = obj.id
  cardDiv.style.marginBottom = '20px'
  cardDiv.className = 'cardDiv flexRow justifyBetween'
  const div1 = document.createElement('div')
  div1.className = 'flexCol justifyBetween alignCenter'
  const div2 = document.createElement('div')
  div2.className = 'flexCol justifyBetween alignCenter'
  const div3 = document.createElement('div')
  div3.className = 'flexCol justifyBetween alignCenter'
  div1.textContent = obj.teamOne
  div3.textContent = obj.teamTwo
  const vsP = document.createElement('p')
  vsP.textContent = `${obj.teamOne} vs ${obj.teamTwo}`
  div2.appendChild(vsP)
  const h2 = document.createElement('h2')
  if (obj.scoreOne) {
    h2.textContent = `${obj.scoreOne} : ${obj.scoreTwo}`
  }
  else {
    h2.textContent = 'VS'
  }
  div2.appendChild(h2)
  const dateP = document.createElement('p')
  dateP.textContent = obj.date
  div2.appendChild(dateP)
  cardDiv.appendChild(div1)
  cardDiv.appendChild(div2)
  cardDiv.appendChild(div3)
  cardDiv.addEventListener('click', deleteCard)
  return cardDiv
}

function deleteCard () {
  console.log(this.id)
  dataArr = dataArr.filter(e => e.id !== Number(this.id))
  console.log(dataArr)
  generateCards()
}

function generateCards () {
  const arr1 = dataArr.filter(e => e.type === 'upcoming')
  const arr2 = dataArr.filter(e => e.type === 'recent')
  const nextMatch = document.getElementById('nextMatch')
  const recentResults = document.getElementById('recentResults')
  nextMatch.innerHTML = ''
  recentResults.innerHTML = ''
  const nextMatchH1 = document.createElement('h1')
  nextMatchH1.textContent = 'Next Match'
  nextMatch.appendChild(nextMatchH1)
  const recentResultsH1 = document.createElement('h1')
  recentResultsH1.textContent = 'Recent Results'
  recentResults.appendChild(recentResultsH1)
  for (let i = 0; i < arr1.length; i++) {
    nextMatch.appendChild(createCard(arr1[i]))
  }
  for (let i = 0; i < arr2.length; i++) {
    recentResults.appendChild(createCard(arr2[i]))
  }
}

const type = document.getElementById('type')
const form = document.querySelector('.form')
type.addEventListener('click', createScoreInput)
form.addEventListener('submit', addData)
