import React from 'react'
import { Button }from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './home.css'

function Home(){
    return(
        <div className='home_contain'>
            <div className="about">
            <h1>About The End</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate mi eleifend turpis mollis pellentesque. 
                    Integer tempus placerat ex sit amet vulputate. Suspendisse elementum risus sem, eget scelerisque ligula pellentesque at. 
                    Sed et ultrices augue. Proin blandit justo non felis dignissim consectetur. Nulla malesuada varius urna, a egestas neque lacinia nec. 
                    Phasellus commodo non massa a dictum. Praesent convallis neque vel nisl vulputate semper eu eu nulla. Maecenas ut sem ligula.
                </p>
            </div>

            <div className='main_body'>
                <div className='button1'>
                <Link to='/usercard'> <Button variant="danger"> Meet the gang! </Button> </Link>
                </div>
                <div className='button2'>
                    <a href='https://forms.gle/rcyPXQMaGQGKBZNm9' target='__blank'><Button variant="danger"> Apply to join! </Button></a>
                </div>
            </div>

        </div>
    )
}

export default Home;