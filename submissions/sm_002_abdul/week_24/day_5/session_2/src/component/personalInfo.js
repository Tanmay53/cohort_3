import React from '../react/index'

const personalInfoHeading = React.createElement('h1',{},'Personal Info')

const name = React.createElement('div',{},'Name : Abdul Jabbar')
const age = React.createElement('div',{},'Age : 26')
const DOB = React.createElement('div',{},'DOB : 09-04-93')
const favColor = React.createElement('div',{},'Favorite Color  : Teal')

const personalInfo = React.createElement('div',{},personalInfoHeading,name,age,DOB,favColor)

export default personalInfo