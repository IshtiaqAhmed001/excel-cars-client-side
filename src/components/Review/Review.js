import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-star-rating-lite';
import './Review.css';

const Review = ({ review }) => {

    const { name, img, ordered, comment, ratings } = review;
    return (
        <Card className="w-100 mx-auto card-container">
            <Card.Img className="mt-3 mx-auto card-img" variant="top" src={img} />
            <Card.Body>
                {/* dynamic ratings */}
                <Rating value={ratings} weight="16" readonly />
                <Card.Title>{name}</Card.Title>
                <Card.Text className="mb-5">
                    <p className="text-danger fw-bold">Ordered {ordered} from Excel Cars</p>
                    <p className="text-secondary">{comment}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Review;