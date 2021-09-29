import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Slideshow from './Components/Slideshow';
import Home from './Components/Home'
import Characters from './Components/Characters';
import Socials from './Components/Socials'
import './App.css';

function App() {
  return (

    <Switch>
      <div className="App">
        <div className="header">
          <div className="header_text">
            <h1><Link to='/home'>The End SMP</Link></h1>
          </div>
        </div>
        <Slideshow className='slideshow'/>

        <div className="body">
          <Route path='/' component={Home} exact/>
          <Route path='/characters' component={Characters} />
          <Route path='/Socials' component={Socials}/>
        </div>
      </div>
    </Switch>
  );
}

export default App;
