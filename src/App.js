import React from 'react';
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <div className= 'contenrWrapper'>
    <header>
    <Header/>
    </header>
    <Body/>
    <footer>
    <Footer/>
    </footer>
    </div>
  );
}


export default App;
