import React from 'react'

interface CategoryProps {
  children: React.ReactNode;
}

const Category = ({children} : CategoryProps)=> {
  return (
    <>
    <div className='px-32 py-8 bg-tertiary'>
      <div className='mb-10'>
        <h2 className="font-Inter font-semibold text-2xl text-util tracking-tight">
          Products
        </h2>
        <p className="font-Inter font-medium text-xl text-p-secondary">
          Order it for you or for your beloved ones
        </p>
      </div>
      <div className='flex items-center justify-between'>
        {children}
      </div>
    </div>
    </>
  );
}

export default Category