import React from '../React/index'

const li1A = React.createElement('li', {id: 'li1'}, 'inner list item 1')
const li1B = React.createElement('li', {id: 'li1'}, 'inner list item 2')
const ul = React.createElement('ul', {id: 'ul'}, 'inner list', li1A, li1B)


const li1 = React.createElement('li', {id: 'li1'}, 'list item 1', ul)
const li2 = React.createElement('li', {id: 'li2'}, 'list item 2')
const li3 = React.createElement('li', {id: 'li3'}, 'list item 3')

const elem = React.createElement('ul', {id: 'name', name: 'firstName'}, 'Masai', li1, li2, li3)

export default elem