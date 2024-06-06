import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (

        <div className='hero' id='action1'>
            <Card className="bg-dark text-white border-0  " id='action1'>
<Card.Img src=" https://media.istockphoto.com/photos/nurse-welcomes-senior-couple-in-hospital-picture-id471870047?k=20&m=471870047&s=612x612&w=0&h=cJwV1g6GHX5y6AvwozW9L0ngG-F70B_4PZCVleG8MrA=" alt="bg-shoe" height={'550px'} />
                <Card.ImgOverlay className='card-img-overplay  d-flex flex-column justify-content-center '>
                    <Card.Title className='card-title fw-bold mb-0 fs-1 display-3 px-3'>NEW SEASON ARRIVALS</Card.Title>
                    <Card.Text className='card-text lead fs-2 p-2'>CHECK OUT ALL THE TRENDS</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>


    );
};

export default Home;
