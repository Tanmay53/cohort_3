import React from 'react';
import Mobiles from './components/Mobiles';
import Button from './components/Button';
import Card from './components/Card';
import './styles/Cards.css';
import './App.css';

const osObj = {
  heading: 'Mobile Operating System',
  name: ['Android', 'Windows', 'iPhone', 'Blackberry' ]
};

const mobManufacturers = {
  heading: 'Mobile Manufacturers',
  name: ['Apple', 'Nokia', 'HTC', 'Micromax', 'Xioami']
};

const cardDetailsObj = {
  name: 'Ricky Park',
  location: 'New York',
  description: 'User interface designer and front-end developer',
  skills: ['UI / UX', 'Front End Development', 'HTML', 'CSS', 'Javascript', 'React', 'Node']
}

function App() {
  return (
    <div>
      <Mobiles osObj={osObj} mobManufacturers={mobManufacturers}/>
      <div style={{display: 'grid', gridTemplateColumns: '150px 150px'}}>
        <Button color='red' label='JOIN US'/>
        <Button color='green' label='SETTINGS'/>
        <Button color='blue' label='LOGIN'/>
        <Button color='brown' label='CONTACT US'/>
        <Button color='purple' label='SEARCH'/>
        <Button color='orange' label='HELP'/>
        <Button color='grey' label='HOME'/>
        <Button color='olive' label='DOWNLOAD'/>
      </div>
      <Card cardDetailsObj={cardDetailsObj}/>
    </div>

  );
}

export default App;