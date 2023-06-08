import React, {useState, useEffect} from 'react'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import { getfeaturedProducts } from '../Utils/api'



export default function Home() {
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const fetchData = async () => {
      try {
        setloading(true)
        const response = await getfeaturedProducts()
        setData(response)

      }catch (error) {
        setError(error)
        
      }finally {
        setloading(false)
      }
    }
    fetchData()
    
  },[])

  console.log('data', data)
  
  return (
    <>
    <Hero/>
    <ProductGrid data={data} error={error} loading={loading}/>
    
    </>
    

  )
}

