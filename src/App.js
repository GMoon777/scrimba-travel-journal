import React from 'react'
import Card from './components/Card.js'
import Navbar from './components/Navbar.js'
import data from './data.js'
import './style.css'

export default function App() {
      
    const cards = data.map(item => {
        return (
            
            <Card 
            key={item.id}
            {...item}/>
        )
    })
    
    return (
       <div>
       <Navbar/>
        <div className="app">
       {cards}
        </div>
       </div>
    )
}