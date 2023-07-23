import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormColor from "./components/FormColor";

const App = () => {
  return (
    <>
      <Container className="my-5 px-5">
          <FormColor></FormColor>
    </Container>
    <footer className="text-center bg-dark text-light py-4 mt-auto">
        <p>
          <i>Practica con React - Ejercicio 06</i>
        </p>
      </footer>
    </>
  );
};


export default App;
