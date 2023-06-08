import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Loading from './spinner'

export default function ProductGrid({data, error, loading}) {
  return (
    <div className='bg-dark py-5 px-2'>
      <Container>
        <h1 className='text-white text-conter mb-5'>Get ready to save.</h1>
        {error &&(
          <div>
            <h4>sorry there was an error loading the products</h4>
          </div>
        )}
        {loading ? (
        <Loading/>
        ) : (
        <>
        <Row className='mt-5 g-4'>
          {data.map((product)=>(
            <Col md={4} key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className='rounded-4 text-cnter bg-secondary'style={{minwidth:'280px', height: '500px'}}>
                  <h5 className='text-white p-4'>{product.title}</h5>
                  <h5 className='text-white mb-4'>N{product.price}</h5>
                  <Image src={product.images[0]} fluid className='px-4' style={{ height:"300px", width: "100%"  }} />
                </div>
              </Link>         
            </Col>
          ))}     
        </Row>
        </>
        )}
      </Container>
    </div>
  )
}
