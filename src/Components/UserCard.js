import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Tube from '../ellaTube.png'
import "./usercard.css"

function UserCard(){
    return(
        <div className='card-contain'>
            <Card className='card'>
                <Card.Img variant="top" src={`${Tube}`} />
                <Card.Body>
                    <Card.Title>NationalGoodBoy</Card.Title>
                    <Card.Text>
                        This might be empty in the final version
                    </Card.Text>
                    <Button variant="danger">Twitch</Button>
                    <Button variant="danger">Youtube</Button>
                    <Button variant="danger">Twitter</Button>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Tube}`} />
                <Card.Body>
                    <Card.Title>Itsme_Taylor</Card.Title>
                    <Card.Text>
                    This might be empty in the final version
                    </Card.Text>
                    <Button variant="danger">Twitch</Button>
                    <Button variant="danger">Youtube</Button>
                    <Button variant="danger">Twitter</Button>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Tube}`} />
                <Card.Body>
                    <Card.Title>Haaffinstaaff</Card.Title>
                    <Card.Text>
                    This might be empty in the final version
                    </Card.Text>
                    <Button variant="danger">Twitch</Button>
                    <Button variant="danger">Youtube</Button>
                    <Button variant="danger">Twitter</Button>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Tube}`} />
                <Card.Body>
                    <Card.Title>Nymira</Card.Title>
                    <Card.Text>
                        This might be empty in the final version
                    </Card.Text>
                    <Button variant="danger">Twitch</Button>
                    <Button variant="danger">Youtube</Button>
                    <Button variant="danger">Twitter</Button>
                </Card.Body>
            </Card>

            
        </div>

    )
}

export default UserCard