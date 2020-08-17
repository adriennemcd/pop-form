import React from 'react';
import Form from './Form'
import './scss/main.scss'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <a href="https://playonphilly.org">
          <img src="https://21ekz81r9uz03z97uj2tly5i-wpengine.netdna-ssl.com/wp-content/themes/pop/images/logo.png" className="logo" alt="Play On Philly" />
        </a>
      </header>
      <h1>Eligibility Survey</h1>
      <Form />
    </div>
  );
}

export default App;
