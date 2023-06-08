import axios from 'axios'

export async function getProducts () {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products')
    const products = response.data
    return products
    
}
export async function getfeaturedProducts () {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=6')
    const products = response.data
    return products
    
}

export async function getProductById (id) {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    const product = response.data
    return product
    
}