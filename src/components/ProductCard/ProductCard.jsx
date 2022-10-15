import React from "react";
import space from "../../images/space.jpg"
import { Card, Button } from "react-bootstrap/";
import "./productcard.css";

export default function ProductCard() {
    return (
        <div className="products">
            <Card className="products-card">
                <Card.Img className="products-card--image" variant="top" src={space} />
                <Card.Body>
                    <Card.Title>Product #1</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}