import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';

function App() {
  const personName = {
    first: 'Bruce',
    second: 'Wayne'
  }

  const nameList = [
    {
      first: 'Ricky',
      second: 'Martin'
    },
    {
      first: 'Pepe',
      second: 'Mujica'
    },
    {
      first: 'Lulu',
      second: 'Wang'
    }
  ]


  return (
    <div className="App">
      <Heading>Hola juan</Heading>
      <Greet name="pepe" messageCount={10} isLogged={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status={5} />
      
    </div>
  );
}

export default App;
