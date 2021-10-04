import {Route, Link, Switch} from 'react-router-dom'

import UserCard from './Components/UserCard';
import Home from './Components/Home'
import Characters from './Components/Characters';
import Socials from './Components/Socials'
import Slideshow from './Components/Slideshow'
import './App.css';

function App() {
  return (

    <Switch>
      <div className="App">
        <div className="header">
          <div className="header_text">
            <h1><Link to='/'>The End SMP</Link></h1>
          </div>
        </div>
        <div className='header_image'> 
          <div className='img_contain'> 
            <Slideshow/>
          </div>
        </div>

        <div className="body">
          <Route path='/' component={Home} exact/>
          <Route path='/characters' component={Characters} />
          <Route path='/Socials' component={Socials}/>
          <Route path='/usercard' component={UserCard} />
        </div>
      </div>
    </Switch>
  );
}

export default App;
