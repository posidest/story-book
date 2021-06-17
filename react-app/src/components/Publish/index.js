import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Publish = () => {
   const me = useSelector(state => state.session.user)
   if(!me) return (
      <Redirect to='/'/>
   )

   return (
      <div>
         <h1>This is where I will render the forms, somehow</h1>
      </div>
   )
}

export default Publish;