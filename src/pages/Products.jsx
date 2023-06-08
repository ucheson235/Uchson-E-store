import React, {useState, useEffect} from 'react'
import { getProducts } from '../Utils/api'
import { Container, Row, Col } from 'react-bootstrap'
import Loading from '../components/spinner'
import ProductTemplate from '../components/ProductTemplate'

export default function Products() {
    const [data, setData] = useState([])
    const [loading, setloading] = useState()
    const [error, setError] = useState(null)
    useEffect(()=>{
        const fetchData = async () => {
          try {
            setloading(true)
            const response = await getProducts()
            setData(response)
    
          }catch (error) {
            setError(error)
            
          }finally {
            setloading(false)
          }
        }
        fetchData()
        
      },[])
    
  return (
    <Container className='py-5 px-3'>
        <h1 className='text-center mt-5'>check out our collecttion of premium product.</h1>
        {error &&(
          <div>
            <h4>sorry there was an error loading the products</h4>
          </div>
        )}
        {loading ? <Loading/> : 
        <Row className='mt-5 g-4'>

            {data.map((product)=> (
                <Col xs={6} md={4} lg={3} key={product.id}>
                    <ProductTemplate product={product}/>
                </Col>
                
            ))}

        </Row>
        }

    </Container>
  )
}
