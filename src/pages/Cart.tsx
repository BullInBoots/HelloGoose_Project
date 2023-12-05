import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { UserAccountType } from '../types/UserAccountType'
import CardList from '../components/Cart/CartList';
import { mockUpUserData } from '../../public/data/mockUpUserData';
import { Link } from 'react-router-dom';

interface CartProps {
  user: UserAccountType;
}

// read user pendingCart data and filter it from all data


const Cart = ({user=mockUpUserData}: CartProps) => {
  return (
    <>
    <NavigationBar/>
    <div className='my-16'>
      <div className='w-fit text-hero font-Inter font-medium mx-auto'>Your carts items</div>
      <div className='w-fit mx-auto mb-12'>
        <Link to='/' className='text-lg font-Inter text-primary underline'>Back to shopping</Link>
      </div>
      <CardList user={user} />
    </div>
    </>
  )
}

export default Cart