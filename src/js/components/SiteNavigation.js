import React from 'react';
import Button from 'react-bootstrap/Button'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'


class SiteNavigation extends React.Component {

  render (){
    return (
      <div>
        <Navbar variant="dark" bg="dark" expand="sm">
          <Container>            
            <a href="index.html" class="navbar-brand">BRUSSELS - ECOCITY BUILDERS</a>
            <Button>

            </Button>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default SiteNavigation;