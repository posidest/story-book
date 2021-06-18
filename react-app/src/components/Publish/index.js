import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Cover from './Cover'


const Publish = () => {
   const me = useSelector(state => state.session.user)
   const book = useSelector(state => state.book)
   console.log(book, 'book on publish page')
   if(!me) return (
      <Redirect to='/'/>
   )
   
   if(!book.tempId) {
      return (
         <>
         <Cover />
         </>
      )
   }

   if(book) {
      return (
         <div>
            <h1>This is where I will render the forms, somehow</h1>
         </div>
      )
   }
   else {
      return (
         <>
         <Cover />
         </>
      )
   }
}

export default Publish;