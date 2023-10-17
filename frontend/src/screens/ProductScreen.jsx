import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {FormControl ,Col, Row  ,ListGroup ,Button,Card ,Image, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const ProductScreen = () => {

  const [qty ,setQty] =useState(1)
  const {id : productId} = useParams();
  const  {data: product , isError, isLoading, error} = useGetProductDetailsQuery(productId)

  const dispatch = useDispatch();
  const navigate =useNavigate();

  const addToCartHandler = () => {
    dispatch(addToCart({...product, qty}))
    navigate('/cart')
  }

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
                     <strong>{product.countInstock ? "In Stock" : "Out of Stock"}</strong>   
                   </Col>
                 </Row>
               </ListGroupItem>
               {product.countInstock > 0 && (
               <ListGroupItem>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <FormControl
                      as ='select'
                      value = {qty}
                      onChange = {(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInstock).keys()].map((x)=>(
                          <option key={x + 1} value = {x + 1}>
                            {x + 1}
                          </option>
                        ))}
                       
                      </FormControl>
                    </Col>
                  </Row>
                </ListGroupItem>
                )}
               <ListGroupItem>
                 <Button
                   className='btn-block'
                   type='button'
                   disabled={product.countInstock === 0 }
                   onClick = {addToCartHandler}
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