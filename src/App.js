import React from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Jumbotron,
  Button,
  InputGroup,
  Form,
  FormControl
} from "react-bootstrap";
import FetchFlights from "./FetchFlights";
import "./App.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { from: "", to: "", date: "", flightData: []};
  }

  search = async evt => {
    evt.preventDefault();
    const url = FetchFlights.directions(this.state.from, this.state.to, this.state.date);
    const flights = await FetchFlights.fetchData(url); 
    this.setState({flightData: flights}) 
    console.log(JSON.stringify(this.state.flightData));
  };
  
  onChange = evt => {
    this.setState({ [evt.target.id]: evt.target.value });
  };

  render() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Scandinair</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar className="bg-light justify-content-between">
        <Form inline onSubmit={this.search} onChange={this.onChange}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text >From</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="from"
              placeholder="Choose airport"
              aria-label="From"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Prepend>
              <InputGroup.Text>To</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="to"
              placeholder="Choose airport"
              aria-label="To"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Prepend>
              <InputGroup.Text>Date</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="date"
              placeholder="Choose Date"
              aria-label="To"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>

      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
  }
}

export default App;
