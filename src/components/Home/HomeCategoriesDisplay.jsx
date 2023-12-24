import React from 'react';

import HomeCategory from './HomeCategory';
import "./styles/HomeCategoriesDisplay.scss"

import Category1 from "../../static/Categories/ParaArmar.png"
import Category2 from "../../static/Categories/ParaPrender.png"
import Category3 from "../../static/Categories/Semillas.png"
import Category4 from "../../static/Categories/Insumos.png"
import Category5 from "../../static/Categories/Autocultivo.png"
import Category6 from "../../static/Categories/Cursos.png"

const categories = [
    {
      id: 1,
      imageUrl: Category1,
      name: 'Para Prender',
    },
    {
      id: 2,
      imageUrl: Category2,
      name: 'Para Armar',
    },
    {
      id: 3,
      imageUrl: Category3,
      name: 'Semillas',
    },
    {
      id: 4,
      imageUrl: Category4,
      name: 'Insumos',
    },
    {
      id: 5,
      imageUrl: Category5,
      name: 'Auto Cultivo',
    },
    {
      id: 6,
      imageUrl: Category6,
      name: 'Cursos',
    },
]

function HomeCategoriesDisplay() {
  return (
    <div className='mb-5'>
      <h2 className='text-center text-2xl font-bold my-5'>Categorias</h2>
      <div className="grid grid-cols-2 min-[768px]:grid-cols-3 gap-4">
        {categories.map((category) => (
          <HomeCategory key={category.id} img={category.imageUrl} name={category.name}/>
        ))}
      </div>
    </div>
  );
}

export default HomeCategoriesDisplay;