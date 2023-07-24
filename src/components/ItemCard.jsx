import "bootstrap/dist/css/bootstrap.min.css";
import {Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const ItemCard = () => {
     return (
        <>
        <Card className="mt-4 ms-0 me-4" style={{ width: '13rem', height: '13rem'}}>
        <Card.Header>Nombre Color</Card.Header>
        <Card.Body className="d-flex custom-card-bg justify-content-center">
            <Card style={{ width: '6rem', height: '5rem'}} />
        </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="danger">Borrar</Button>
          </Card.Footer>
          </Card>
        </>
    );
};

export default ItemCard;