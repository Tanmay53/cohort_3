import React from 'react'
import OS from './OS'
import MM from './MM'

var osys = {
  name: ['Andriod', 'blackberry', 'iPhone', 'Windows Phone']
}
var manf = {
  name: ['Samsung', 'HTC', 'Micromax', 'Apple']
}
function Task1() {
  return (
    <div>
      <OS obj={osys.name} />
      <MM obj={manf.name} />

    </div>
  );
}

export default Task1;
