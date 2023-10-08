import React from 'react'
import { Card , Container, CardImg, CardTitle, CardLink , CardText ,CardBody, CardFooter} from 'react-bootstrap'


const Product = ({product}) => {
  return (
      <Card className='my-3  rounded'>
        <a href={`product/${product._id}`}>
          <Card.Img src={product.image} variant='top'></Card.Img>
        </a>
        <CardBody>
        <a href={`product/${product._id}`}>
          <CardTitle as="div"> 
            <strong>{product.name}</strong>
          </CardTitle>
        </a>
        <CardText as="h3" > ${product.price} </CardText>
        </CardBody>
      </Card>
  )
}

export default Product