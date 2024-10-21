import './App.css';
import { Bienvenue } from './components/Bienvenue';
import { Footer } from './components/Footer';
import { NavigationBar } from './components/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import { Voiture } from './components/Voiture';
import { VoitureListe } from './components/VoitureListe';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const marginTop = { marginTop:"20px"}
  return (
    <Router className="App bg-secondary">
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop} >
            <Switch> 
              <Route path="/" exact component={Bienvenue}/> 
              <Route path="/add" exact component={Voiture}/> 
              <Route path="/list" exact component={VoitureListe}/> 
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
