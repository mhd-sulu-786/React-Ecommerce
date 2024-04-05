import React from 'react'
import Card from 'react-bootstrap/Card';
const Home = () => {
    return (
        <div className='hero'>


            <Card className="bg-dark text-white border-0  " >
                <Card.Img src="https://www.hdwallpapers.in/download/red_nike_shoe_in_black_background_4k_hd_nike-HD.jpg" alt="bg-shoe" height={'550px'} />
                <Card.ImgOverlay className='card-img-overplay  d-flex flex-column justify-content-center '>
                    <Card.Title className='card-title fw-bold mb-0 fs-1 display-3' >NEW SEASON ARRIVELS</Card.Title>
                    <Card.Text className=' card-text lead fs-2'>
                        CHECK OUT ALL THE TRENDS
                    </Card.Text>

                </Card.ImgOverlay>
            </Card>




        </div>
    )
}

export default Home