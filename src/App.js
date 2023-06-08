
// import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Nav";
import {Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Products from './pages/Products';

import ProductId from './pages/ProductId';

// import Heading from './components/Heading'
// import Input from './components/Input';


// const nameStyle = {
//   color: 'red',
//   fontSize: '30px',n

// }

function App(){
  // const [color, setColor] = useState("red")
  // console.log(color)

  // const updateColor = () =>{
  //   setColor('green')
  // }
  return(
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>} />
      <Route path='/product/:ProductId' element={<ProductId/>} />
      
      
    </Routes>
    {/* <h1 style={nameStyle}>hello</h1>
    <h1 className='styleh'>hello</h1>
    <Heading  name="paul" club="Arsenal"/>
    <Input name="Black Adam" occupation="superhero" saturday={nameStyle}/>
    <Input/>
    <h1>my fav color is {color}</h1> */}
    {/* <button onClick={updatecolor}>update</button> */}
    {/* <button onClick={()=> setColor("orange")}>update color</button> */}

 
    </>

  );
}
export default App;