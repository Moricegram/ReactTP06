import "bootstrap/dist/css/bootstrap.min.css";
import {Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ItemCard from "./ItemCard";

const BookCards = () => {
    return (
        <div className="row p-0 ms-0">
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        </div>
   
    );
};

export default BookCards;