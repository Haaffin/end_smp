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
                    Three kingdoms bonded in hardship and blood band together to overpower
                    a despotic and egotistic goddess who threatens to lay waste to all they
                    know and love. Trauma, torture, agony, and heartache accompany these
                    warriors who risk their lives and sanity to make it to the End.
                    But beware, the lines between good and evil aren’t so clear cut
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
