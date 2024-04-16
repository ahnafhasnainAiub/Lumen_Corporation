import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Product from './components/Product/Product.jsx';
import Contact from './components/Contact/Contact.jsx'
import Banner from './components/Banner/Banner.jsx'
import Services from './components/Services/Services.jsx'
import ProductDetails from './components/Product/ProductDetails.jsx'
import ProductDetails1 from './components/Product/ProductDetails1.jsx'
import ProductDetails2 from './components/Product/ProductDetails2.jsx'
import ProductDetails3 from './components/Product/ProductDetails3.jsx'
import ProductDetails4 from './components/Product/ProductDetails4.jsx'
import ProductDetails5 from './components/Product/ProductDetails5.jsx'
import ProductDetails6 from './components/Product/ProductDetails6.jsx'
import ProductDetails7 from './components/Product/ProductDetails7.jsx'
import ProductDetails8 from './components/Product/ProductDetails8.jsx'
import ProductDetails9 from './components/Product/ProductDetails9.jsx'
import ProductDetails10 from './components/Product/ProductDetails10.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [      
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"products",
        element: <Product/>,        
      },
      {
        path:"product-details",
        element: <ProductDetails/>,        
      },
      {
        path:"product-details1",
        element: <ProductDetails1/>,        
      },
      {
        path:"product-details2",
        element: <ProductDetails2/>,        
      },
      {
        path:"product-details3",
        element: <ProductDetails3/>,        
      },
      {
        path:"product-details4",
        element: <ProductDetails4/>,        
      },
      {
        path:"product-details5",
        element: <ProductDetails5/>,        
      },
      {
        path:"product-details6",
        element: <ProductDetails6/>,        
      },
      {
        path:"product-details7",
        element: <ProductDetails7/>,        
      },
      {
        path:"product-details8",
        element: <ProductDetails8/>,        
      },
      {
        path:"product-details9",
        element: <ProductDetails9/>,        
      },
      {
        path:"product-details10",
        element: <ProductDetails10/>,        
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"services",
        element: <Services/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
