import  { useState } from 'react';
import dataJson from './data/berlin.json'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import './App.css';

function App() {
  const [people, setPeople] = useState(dataJson)

  return (
    <div className="App">
      <div>
      <h1>Iteration 1</h1>
      <IdCard 
      lastName='Gan'
      firstName='Leela'
      gender='female'
      height={25}
      birth={'2021-04-21'}
      picture='https://cdn.shopify.com/s/files/1/2394/1045/articles/Movingcat_1400x.jpg?v=1660586191'
      />

      <IdCard 
      lastName='Gan'
      firstName='Julz'
      gender='female'
      height='160'
      birth={'1995-05-01'}
      picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0ZacR22hSCE30CHwvwevHItiJt1Vjw4-bA&usqp=CAU"
      />
      </div>

      <h1>Iteration 2</h1>
      <Greetings lang='de'>Ludwig </Greetings>
      <Greetings lang='fr'>François</Greetings>
    </div>
  );
}

export default App;
