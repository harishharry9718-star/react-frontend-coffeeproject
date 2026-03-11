import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {

  const navigate = useNavigate();

  return (
    <Container className="mt-5 pt-4">
      
      <h2 className="text-center mb-4 fw-bold">
        Admin Dashboard
      </h2>

      <Row className="justify-content-center g-3">

        <Col md={4}>
          <Button
            variant="primary"
            className="w-100 py-3"
            onClick={() => navigate("/admin/addmenu")}
          >
            ➕ Add Menu Item
          </Button>
        </Col>

        <Col md={4}>
          <Button
            variant="secondary"
            className="w-100 py-3"
            onClick={() => navigate("/admin/menulist")}
          >
            📋 View Menu Items
          </Button>
        </Col>

        <Col md={4}>
          <Button
            variant="warning"
            className="w-100 py-3"
            onClick={() => navigate("/admin/orders")}
          >
            📦 View Orders
          </Button>
        </Col>

        <Col md={4}>
          <Button
            variant="info"
            className="w-100 py-3"
            onClick={() => navigate("/admin/order-report")}
          >
            📊 Order Report
          </Button>
        </Col>

        <Col md={4}>
          <Button
            variant="danger"
            className="w-100 py-3"
            onClick={() => {
              localStorage.removeItem("adminAuth");
              navigate("/AdminLoginReg");
            }}
          >
            🚪 Logout
          </Button>
        </Col>

      </Row>

    </Container>
  );
}
