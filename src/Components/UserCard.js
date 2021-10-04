import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Tube from '../ellaTube.png'
import Theo from '../theo.png'
import Haaff from '../Haaff.png'
import Nat from '../national.png'
import Nym from'../nym.png'
import "./usercard.css"

function UserCard(){
    return(
        <div className='card-contain'>
            <Card className='card'>
                <Card.Img variant="top" src={`${Nat}`} />
                <Card.Body>
                    <Card.Title>National</Card.Title>
                    <Card.Text>
                        This might be empty in the final version
                    </Card.Text>
                    <a href='#' target='__blank'><Button variant="danger">Twitch</Button></a>
                    <a href='#' target='__blank'><Button variant="danger">Youtube</Button></a>
                    <a href='#' target='__blank'><Button variant="danger">Twitter</Button></a>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Tube}`} />
                <Card.Body>
                    <Card.Title>Taylor</Card.Title>
                    <Card.Text>
                    This might be empty in the final version
                    </Card.Text>
                    <a href='#' target=''><Button variant="danger">Twitch</Button></a>
                    <a href='#' target=''><Button variant="danger">Youtube</Button></a>
                    <a href='#' target=''><Button variant="danger">Twitter</Button></a>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Nym}`} />
                <Card.Body>
                    <Card.Title>Nymira</Card.Title>
                    <Card.Text>
                        This might be empty in the final version
                    </Card.Text>
                    <a href='https://www.twitch.tv/darkwatcher_nymira' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <Button variant="danger">Youtube</Button>
                    <Button variant="danger">Twitter</Button>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Haaff}`} />
                <Card.Body>
                    <Card.Title>Echo</Card.Title>
                    <Card.Text>
                    This might be empty in the final version
                    </Card.Text>
                    <a href='https://www.twitch.tv/haaffinstaaff' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <a href='https://www.youtube.com/channel/UCNG1XrRQL9VJjrVjiBVZlbw' target='__blank'><Button variant="primary">Youtube</Button></a>
                    <a href='https://www.twitter.com/haaffinstaaff' target='__blank'><Button variant="primary">Twitter</Button></a>
                </Card.Body>
            </Card>


            <Card className='card'>
                <Card.Img variant="top" src={`${Theo}`} />
                <Card.Body>
                    <Card.Title>Theo</Card.Title>
                    <Card.Text>
                        This might be empty in the final version
                    </Card.Text>
                    <a href='https://www.twitch.tv/galactic__jelly' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <Button variant="danger">Youtube</Button>
                <Button variant="danger">Twitter</Button>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Tube}`} />
                <Card.Body>
                    <Card.Title>Moss</Card.Title>
                    <Card.Text>
                        This might be empty in the final version
                    </Card.Text>
                    <a href='http://twitch.tv/HDmoss' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <a href='https://m.youtube.com/channel/UCXb6ZIZQTtcAyrn8t7QYcfA' target='__blank'><Button variant="primary">Youtube</Button></a>
                    <a href='https://www.twitter.com/4k_moss' target='__blank'><Button variant="primary">Twitter</Button></a>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Tube}`} />
                <Card.Body>
                    <Card.Title>Bard</Card.Title>
                    <Card.Text>
                        This might be empty in the final version
                    </Card.Text>
                    <a href='https://www.twitch.tv/bardicled' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <Button variant="danger">Youtube</Button>
                    <a href='https://twitter.com/bardicled' target='__blank'><Button variant="primary">Twitter</Button></a>
                </Card.Body>
            </Card>

            
        </div>

    )
}

export default UserCard


{/* <Card className='card'>
<Card.Img variant="top" src={`${Tube}`} />
<Card.Body>
    <Card.Title>Name</Card.Title>
    <Card.Text>
        This might be empty in the final version
    </Card.Text>
    <a href='#' target=''><Button variant="danger">Twitch</Button></a>
    <a href='#' target=''><Button variant="danger">Youtube</Button></a>
    <a href='#' target=''><Button variant="danger">Twitter</Button></a>
</Card.Body>
</Card */}