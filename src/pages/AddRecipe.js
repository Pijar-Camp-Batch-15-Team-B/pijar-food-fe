import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../style/AddRecipe.css'

export default function AddRecipe() {
  return (
    <div id='addRecipe'>
      <Navbar />
      <section className='container addRecipeBody'>
        <input className='addPict' placeholder={<button>Add Photo</button>}></input>
        <input className='addTitle' placeholder='Title'></input>
        <input className='addIngredient' placeholder='Ingredients'></input>
        <input className='addVideo' placeholder='Video'></input>
        <button>Send</button>
      </section>
      <Footer />
    </div>
  )
}
