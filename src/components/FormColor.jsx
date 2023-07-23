import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
const FormColor = () => {
    return (
        <>
        <Card>
        <Card.Header>Administrar colores</Card.Header>
        <Card.Body className="d-flex bg-secondary">
            <Card style={{ width: '6rem', height: '5rem' }} />
            <Form.Control className="ms-3 my-4"
            type="text"
            placeholder="ingresa una color (en inglés) ej: Blue"
          />
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="primary">Guardar</Button>
          </Card.Footer>
          </Card>
        </>
    );
};

export default FormColor;