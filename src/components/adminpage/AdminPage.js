import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./AdminPage.css";
import OrderCard from "../ordercard/OrderCard";
import axios from "axios";

const AdminPage = () => {
  const [data, setData] = useState([]);

  const getOrdersData = () => {
    axios.get(`https://localhost:7024/api/orders/list`)
      .then((response) => {
        setData(response.data.orders);
      })
      .catch((error) => console.log(`Error: ${error}`))
  }

  useEffect(() => {
    getOrdersData();
  }, [])

  const displayData = data.map((data) => (
    <OrderCard
      orderid={data.id}
      customerid={data.userId}
      orderdate={data.date}
    />
  ));

  return (
    <Container className="top-container">
      <Container fluid="lg" className="game-container">
        <h1 className="categoryFont"> ADMIN </h1>
        <div className="row">
          <div className="col category-card card-padding">{displayData}</div>
        </div>
      </Container>
    </Container>
  );
};
export default AdminPage;