import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (

        <div className='hero' id='action1'>
            <Card className="bg-dark text-white border-0  " id='action1'>
<Card.Img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiIP115O3WtT4iV59Zl2D9-XnZnzD42K6EA&usqp=CAU" alt="bg-shoe" height={'550px'} />
                <Card.ImgOverlay className='card-img-overplay  d-flex flex-column justify-content-center '>
                    <Card.Title className='card-title fw-bold mb-0 fs-1 display-3 px-3'>NEW SEASON ARRIVALS</Card.Title>
                    <Card.Text className='card-text lead fs-2 p-2'>CHECK OUT ALL THE TRENDS</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>


    );
};

export default Home;
