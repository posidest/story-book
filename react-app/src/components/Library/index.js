import React from 'react'
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';


const Library = () => {
   const me = useSelector(state => state.session.user)

   if (!me) return ( 
      <Redirect to='/'/>
   )

   return (
      <div>
         <h1>Welcome to the Library</h1>


      </div>
   )
}


export default Library;