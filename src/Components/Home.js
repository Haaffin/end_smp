import React from 'react'
import { Button }from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './home.css'

function Home(){
    return(
        <div className='home_contain'>
            <div className="about">
            <h1>About The End</h1>
                <p>
                    About Us coming soon
                </p>
            </div>

            <div className='main_body'>
                <div className='button1'>
                <Link to='/usercard'> <Button variant="primary"> Meet the gang! </Button> </Link>
                </div>
                <div className='button2'>
                    <a href='https://forms.gle/rcyPXQMaGQGKBZNm9' target='__blank'><Button variant="primary"> Apply to join! </Button></a>
                </div>
            </div>

        </div>
    )
}

export default Home;