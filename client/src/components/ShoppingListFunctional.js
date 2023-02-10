import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

function ShoppingListFunctional() {
  const [items, setItems] = useState([]);
  return (
    <div>
      <h1>Shopping List item</h1>
    </div>
  );
}

export default ShoppingListFunctional;
