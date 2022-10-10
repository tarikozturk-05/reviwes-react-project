import React from 'react';
import Card from './components/card/Card';
import Header from './components/header/Header';
import data from './helper/data'

// import Review from './Review';


function App() {
 
  return(
    <>

<Header/>
<Card data={data}/>


  </>
  ) 
}

export default App;
