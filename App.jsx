
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import React from 'react'
import './index.css'
import ProfilePic from './ProfilePic.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'

function App(){
  const fruits = [{id: 1, name:'Apple', calories: 95},
                    {id: 2,name:'Banana', calories: 105},
                    {id: 3,name:'Cherry',calories: 50},
                    {id: 4, name:'Date',calories: 277},
                    {id: 5, name:'Elderberry',calories: 73},];

const vegetables = [{id: 6, name:'Tomatoes', calories: 45},
                    {id: 7,name:'Kales', calories: 15},
                    {id: 8,name:'Cabbage',calories: 33},
                    {id: 9, name:'Spinach',calories: 40},
                    {id: 10, name:'Nightshade',calories: 23},];
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Daft mf" />
      <Button/>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
      <ProfilePic/>
      <MyComponent/>
      <Counter/>
    </>
  );
}

export default App;