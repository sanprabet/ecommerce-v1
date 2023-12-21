import React from 'react';
import "./styles/HomeCategoriesDisplay.scss"

import Category1 from "../../static/Category1.png"
import Category2 from "../../static/Category2.png"
import Category3 from "../../static/Category3.png"
import Category4 from "../../static/Category4.png"
import Category5 from "../../static/Category5.png"
import Category6 from "../../static/Category6.png"

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
      <div className="grid grid-cols-2 min-[768px]:grid-cols-3 gap-2">
        {categories.map((category) => (
          <div key={category.id} className="aspect-w-1 aspect-h-1">
              <img
                className="w-full h-full"
                src={category.imageUrl}
                alt={category.name}
              />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCategoriesDisplay;