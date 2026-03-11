import { Card, Button, Row, Col } from "react-bootstrap";
import { MenuContext } from "../../context/Context";
import { useContext } from "react";


const CartList = (props) => {

  const { name, price, id, imageUrl } = props.data;

  const { cartItem, AddtoCart, RemoveCart } = useContext(MenuContext)


  return (
    <div className="p-2 cart-list">
      <Card>
        <Card.Body className="p-2">
          <Row>
            <Col xs={6} sm={4}>
              <Card.Img src={imageUrl} style={{ height: '150px' }} />
            </Col>
            <Col xs={4} sm={4} style={{ display: 'flex', alignItems: 'center' }}>
              <div>
              <Card.Title className="cart-txt">{name}</Card.Title>
              <Card.Text>{price} Rupees</Card.Text>
              </div>
            </Col>
            <Col xs={2} sm={4} className="cart-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card.Text>
                <Button variant="dark" onClick={() => AddtoCart(id)}>+</Button> &nbsp;
                <span style={{paddingInline:'5px'}}>{cartItem[id]}</span> &nbsp;
                <Button variant="dark" onClick={() => RemoveCart(id)}>- </Button>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}


export default CartList;