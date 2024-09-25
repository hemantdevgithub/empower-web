import { Card, Col, Row } from "antd";

const InvestorDashboard = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Card>Card content</Card>
        </Col>
        <Col span={6}>
          <Card>Card content</Card>
        </Col>
        <Col span={6}>
          <Card>Card content</Card>
        </Col>
        <Col span={6}>
          <Card>Card content</Card>
        </Col>
      </Row>
    </div>
  );
};

export default InvestorDashboard;
