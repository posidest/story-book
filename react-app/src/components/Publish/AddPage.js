import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';


const AddPage = () => {
   const me = useSelector(state => state.session.user)

   if(!me) return (
      <Redirect to='/'/>
   )

   return (
      <div>
         <h1>This will be a form for adding pages.</h1>
      </div>
   )
}

export default AddPage;