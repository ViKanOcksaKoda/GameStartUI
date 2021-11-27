import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./AdminPage.css";

function OrderList(props) {
  const orders = props.orders;
  const listItems = orders.map((order) => (
    <p key={order.toString()}>{order}</p>
    ));
  return listItems;
}

const orders = [1 , 2, 3, 4, 5];

const AdminPage = () => {
  
  return (
    <Container className="top-container">
      <Container fluid="lg" className="game-container">
        <h1 className="categoryFont"> ADMIN </h1>
        <Container>
          <Row>
            <Col className="left-Colum-Style"><OrderList orders={orders} /></Col>
            <Col><OrderList orders={orders} /></Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};
export default AdminPage;

{
  /* <Container className="top-container">
      <Container fluid="lg" className="game-container">
        <h1 className="categoryFont"> ADMIN </h1>
        <button
          onClick={() => OrderList(orders)}
          type="button"
          className="btn btn-primary admin-button"
        >
          GET ORDERS
        </button>
        
        <OrderList orders={orders} />
      </Container>
    </Container> */
}

// export default class AdminPage extends Component {
//   static displayName = AdminPage.name;

//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   render() {
//     const orders = [1, 2, 3, 4, 5];
//     return (
//       <Container className="top-container">
//       <Container fluid="lg" className="game-container">
//         <h1 className="categoryFont"> ADMIN </h1>
//         <button onClick={() => OrderList(orders)} type="button" className="btn btn-primary admin-button">
//           GET ORDERS
//         </button>
//         {/* <OrderList orders={orders} /> */}
//       </Container>
//     </Container>
//     );
//   }
// }
