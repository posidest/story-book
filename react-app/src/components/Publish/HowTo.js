import React from 'react'
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const HowTo = () => {
   const me = useSelector(state => state.session.user)
   if (!me) return ( 
   <Redirect to='/'/>
   )

   return (
      <div>
         <h1>How to info on publishing a book</h1>
      </div>
   )
}


export default HowTo;