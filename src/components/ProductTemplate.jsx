import React from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

export default function ProductTemplate({product}) {
  return (
    <>
    <Link to={`/product/${product.id}`}>
      <div className='shadow max-auto mb-3'>
        <Image src={product.images[0]} alt={product.title}
        style={{height: '220px', width: '100%', objectFit: 'cover'}}
        />
      </div>
      <div className='text-start'>
        <p className='text-dark'>{product.title}</p>
        <p>N{product.price}</p>
      </div>
    </Link>
   

    </>
  )
}
