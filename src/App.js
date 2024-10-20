import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { NavigationBar } from './components/NavigationBar';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
      <Row>
        <div className="bg-light p-5 rounded-lg">
          <h1>Hello World!</h1>
          <p>
            Ceci est le corps de la page.
          </p>
        </div>
      </Row>
    </Container>
    </div>
  );
}

export default App;
