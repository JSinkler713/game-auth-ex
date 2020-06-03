import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import './App.css'

function App() {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

  const storeUser = (userId) => {
    setCurrentUser({ currentUser: userId })
    localStorage.setItem('uid', userId)
  }

  return (
    <div className="App">
      <Header currentUser={ currentUser } />
      <Routes 
        currentUser={ currentUser }
        storeUser={ storeUser }
      />
      <Footer />
    </div>
  );
}

export default App 
