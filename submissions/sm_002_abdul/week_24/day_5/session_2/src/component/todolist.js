import React from '../react/index'

const todolistData = ["Cooking", "Cleaning", "Home work", "Shopping", "Coding"]

const item1 = React.createElement('li',{},"Cooking")
const item2 = React.createElement('li',{},"Cleaning")
const item3 = React.createElement('li',{},"Home work")
const item4 = React.createElement('li',{},"Shopping")
const item5 = React.createElement('li',{},"Coding")

const todolist = React.createElement('ul',{},item1,item2,item3,item4,item5)

export default todolist