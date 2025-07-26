import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.jpg"
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Details from '../pages/Details'
function Header() {
    let[category,setCategory]= useState([])
    useEffect(()=>{
        fetch('https://bankingkhabar.com/wp-json/wp/v2/categories').then(a=> a.json()).then(b=> setCategory(b))
},[])

  return (
   <>
   <header className='py-3'>
    <div className="container mx-auto">
        <img className= "w-[320px]" src={logo} alt="" />

        <nav className='bg-red-700 text-white py-2'>
            <ul className='flex gap-4'>
                <li className='hover:bg-red-600 p-2'> <Link to={`/`} > मुख्य पेज </Link> </li>
                {category.map(a=> <li className='hover:bg-red-600 p-2' key={a.id}> <Link to={`/category/${a.id}`}>{a.name}</Link> </li>)}
            </ul>

        </nav>
    </div>

   </header>

   <Routes>
    <Route path= '/' element={<Home/>}/>
    <Route path= '/category/:cid/' element={<Category/>}/>
    <Route path= '/detail' element={<Details/>}/>
    </Routes>
   </>
  )
}

export default Header
