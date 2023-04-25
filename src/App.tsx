import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import ResponsiveHeader from './components/ResponsiveHeader';


function App() {
  const widthScreen = window.innerWidth;
  console.log(widthScreen)
  return (
    <div className="app">
      {
        widthScreen > 768 ? (
          <Header />
        ) :  (<ResponsiveHeader />)
      }
      
        <Body />
    </div>
  );
}

export default App;
