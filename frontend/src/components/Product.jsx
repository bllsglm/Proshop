import React from 'react'
import { Card, CardTitle, CardText ,CardBody} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from "./Rating"

const Product = ({product}) => {
  return (
      <Card className='my-3 p-1 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top'></Card.Img>
        </Link>
        <CardBody>
        <Link to={`/product/${product._id}`}>
          <CardTitle as="div"> 
            <strong>{product.name}</strong>
          </CardTitle>
        </Link>
        <CardText as="div">
          <Rating value = {product.rating} text={`${product.numReviews} reviews`}> </Rating>
        </CardText>
        <CardText as="h3"> ${product.price} </CardText>
        </CardBody>
      </Card>
  )
}

export default Product