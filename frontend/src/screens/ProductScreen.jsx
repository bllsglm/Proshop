import { useParams } from 'react-router-dom';
import {Col, Row  ,ListGroup ,Button,Card ,Image, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = () => {

  const {id : productId} = useParams();
  const  {data: product , isError, isLoading, error} = useGetProductDetailsQuery(productId)
  

  return(
  <>
  <Link className='btn btn-light my-3' to="/"> Go back</Link>
    {isLoading ? (<Loader/>) : isError ? ( 
       <Message variant='danger'> 
         { error?.data?.message || error.error}
       </Message>) : (
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
   
   )
   }
   </>
  )


}

export default ProductScreen