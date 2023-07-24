import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BookCards from "./BookCards";

const FormColor = () => {
    // Creo una variable de estado para almacenar el color ingresado
    const [color, setColor] = useState('');

    // Función para manejar el cambio en el Form.Control
    const handleCambioColor = (e) => {
        // Actualiza el valor del estado con el color ingresado
        setColor(e.target.value); 
    };

    return (
        <>
        <Card style={{ width: '71rem'}}>
        <Card.Header>Administrar colores</Card.Header>
        <Card.Body className="d-flex custom-card-bg ">
            <Card style={{ width: '6rem', height: '5rem', backgroundColor: color}} />
            <Form.Control
                className="ms-3 my-4"
                type="text"
                placeholder="ingresa una color (en inglés) ej: Blue"
                // Agrego el controlador de eventos para actualizar el estado
                onChange={handleCambioColor} 
            />
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="primary">Guardar</Button>
          </Card.Footer>
          </Card>
          <BookCards></BookCards>
        </>
    );
};

export default FormColor;
