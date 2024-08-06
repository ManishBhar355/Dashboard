import React from 'react';
import { Container, Row, Col } from 'react-bootstrap-v5';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardOverview from './components/DashboardOverview';
import ActivityChart from './components/ActivityChart';
import RecentOrders from './components/RecentOrders';
import CustomerFeedback from './components/CustomerFeedback';
import NetProfit from './components/NetProfit';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Highlight from './components/Highlight';

function App() {
  return (
    <div className="app d-flex">
      <Sidebar className="col-lg-2" />
      <div fluid className="main-content col-lg-12">
        <Header />
        <Row className="dashboard">
          <Col lg={8}>
      <h2 className='dash-head'>Dashboard</h2>
            <DashboardOverview />
            <ActivityChart />
            <RecentOrders />
          </Col>
          <Col lg={4}>
            <NetProfit />
            <Highlight />
            <CustomerFeedback />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
