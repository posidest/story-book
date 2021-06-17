import React from 'react'
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';


const CreateBook = () => {
   const me = useSelector(state => state.session.user)

   if (!me) return ( 
   <Redirect to='/'/>
   )

   return (
      <div>
         <h1>This is where you will add the title, cover pic and description for your book.</h1>
      </div>
   )

}

export default CreateBook;