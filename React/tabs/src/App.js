import './App.css';
import React, { useState } from 'react';
import Tab from './components/Tab';

function App() {

  const [tabText, setTabText] = useState({    
    text: "Tab 1 content is showing here"
  })


  return (
    <div className="tabText">
      <Tab 
        tabText={tabText}
        setTabText={setTabText}
      />

      <p>{tabText.text}</p>
    </div>
  );
}

export default App;
