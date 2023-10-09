import { useParams } from 'react-router-dom';
import products from '../products';
import {Col, Row  ,ListGroup ,Button,Card ,Image, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import Product from '../components/Product';


const ProductScreen = () => {

  const { id :productId } = useParams()
  const product = products.find((p) => p._id === parseInt(productId));
  console.log(product);

  return <>
     <Link className='btn btn-light my-3' to="/"> Go back</Link>
     <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroupItem>
            <ListGroupItem>
              Price : ${product.price}
            </ListGroupItem>
            <ListGroupItem>
              Description : {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col> Price: </Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col> Status: </Col>
                  <Col>
                    <strong>{product.countInStock ? "In Stock" : "Out of Stock"}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0 }
                >Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
     </Row>
  </>
  
}

export default ProductScreen