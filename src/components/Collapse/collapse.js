import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './style.css'

class CollapseCustom extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: state.collapse }));
  }

  render() {
    return (
      <div>
        <Button className="customButtonCollapse"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.areaName}</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card className="customCard">
            <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default CollapseCustom;