import React from 'react'
import {Card, Button} from 'react-bootstrap'
// import Tube from '../assets/Images/tube.png'
import Theo from '../assets/Images/theo.png'
import Haaff from '../assets/Images/Haaff.png'
import Nat from '../assets/Images/national.png'
import Nym from'../assets/Images/nym.png'
import Taylor from '../assets/Images/taylor.jpg'
import Kai from '../assets/Images/kai.jpeg'
import Moss from '../assets/Images/moss.png'
import Bard from '../assets/Images/bard.png'
import Nano from '../assets/Images/Nano.png'
import "./usercard.css"

function UserCard(){
    return(
        <div className='card-contain'>
            <Card className='card'>
                <Card.Img variant="top" src={`${Nat}`} />
                <Card.Body>
                    <Card.Title>National</Card.Title>
                    <Card.Text>
                        Lore Writer <br/>
                        Director <br/>
                        Citizen of Remnant <br/>
                        Eli
                    </Card.Text>
                    <a href='https://www.twitch.tv/nationalgoodboy' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <Button variant="danger">Youtube</Button>
                    <Button variant="danger">Twitter</Button>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Taylor}`} />
                <Card.Body>
                    <Card.Title>Taylor</Card.Title>
                    <Card.Text>
                        Moderator <br/>
                        Independent Traveler <br/>
                        Ella
                    </Card.Text>
                    <a href='https://www.twitch.tv/itsme_taylor' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <a href='https://www.youtube.com/channel/UCphlHz0YZu1_NkGwnIrdIbQ' target='__blank'><Button variant="primary">Youtube</Button></a>
                    <a href='https://mobile.twitter.com/itsme_taylort' target='__blank'><Button variant="primary">Twitter</Button></a>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Haaff}`} />
                <Card.Body>
                    <Card.Title>Echo</Card.Title>
                    <Card.Text>
                        Moderator <br/>
                        King of Vaitor <br/>
                        Imrik 
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
                        Resident of Vaitor <br/>
                        Ryder
                    </Card.Text>
                    <a href='https://www.twitch.tv/galactic__jelly' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <Button variant="danger">Youtube</Button>
                    <Button variant="danger">Twitter</Button>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Bard}`} />
                <Card.Body>
                    <Card.Title>Bard</Card.Title>
                    <Card.Text>
                        Resident of Yggdrasil <br/>
                        Toby
                    </Card.Text>
                    <a href='https://www.twitch.tv/bardicled' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <Button variant="danger">Youtube</Button>
                    <a href='https://twitter.com/bardicled' target='__blank'><Button variant="primary">Twitter</Button></a>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Kai}`} />
                <Card.Body>
                    <Card.Title>Kai</Card.Title>
                    <Card.Text>
                        Resident of Remnant <br/>
                        Henri
                    </Card.Text>
                    <a href='https://www.twitch.tv/derpyartist101' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <a href='https://www.youtube.com/channel/UC1O5LBNTOi8oM284EPASLIQ' target='__blank'><Button variant="primary">Youtube</Button></a>
                    <Button variant="danger">Twitter</Button>
                </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Img variant="top" src={`${Nano}`} />
                <Card.Body>
                    <Card.Title>Nano</Card.Title>
                    <Card.Text>
                        Resident of Vaitor <br/>
                        Damien
                    </Card.Text>
                    <a href='https://www.twitch.tv/nanohour' target='__blank'><Button variant="primary">Twitch</Button></a>
                    <a href='https://www.youtube.com/channel/UCju2hdDZHQOJZDtG75v0RYA' target=''><Button variant="primary">Youtube</Button></a>
                    <a href='https://twitter.com/NanoHour_Art' target=''><Button variant="primary">Twitter</Button></a>
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
</Card> */}