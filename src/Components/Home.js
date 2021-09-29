import React, {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import './home.css'

function Home(){

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return(
        <div className='home_contain'>
            <div className="about">
            <h1>Generic About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate mi eleifend turpis mollis pellentesque. 
                    Integer tempus placerat ex sit amet vulputate. Suspendisse elementum risus sem, eget scelerisque ligula pellentesque at. 
                    Sed et ultrices augue. Proin blandit justo non felis dignissim consectetur. Nulla malesuada varius urna, a egestas neque lacinia nec. 
                    Phasellus commodo non massa a dictum. Praesent convallis neque vel nisl vulputate semper eu eu nulla. Maecenas ut sem ligula.
                </p>
            </div>

            <div className='main_body'>
                <Button variant="danger" ref={target} onClick={() => setShow(!show)}>See the Characters</Button>
                <Button variant="danger" ref={target} onClick={() => setShow(!show)}>Follow everyone's socials here!</Button>
                <Overlay target={target.current} show={show} placement="bottom">
                    {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div
                        {...props}
                        style={{
                            width: '10%',
                            backgroundColor: 'rgb(255, 100, 100',
                            padding: '15px',
                            margin: '5px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                        }}
                    >
                        Coming Soon
                    </div>
                    )}
                </Overlay>
            </div>
        </div>
    )
}

export default Home;