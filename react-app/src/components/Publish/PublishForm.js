import React from 'react'
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';


const PublishForm = () => {
   const me = useSelector(state => state.session.user)
   const pages = useSelector(state => state.page.pages)
   const book = useSelector(state => state.book)


   if (!me) return ( 
   <Redirect to='/'/>
   )

   if (pages && book) {
      return (
         <div className='publish'>
            <div className='cover'>
               <h1>{book.title}</h1>
               <img src={book.cover} alt='book-cover'/>
               <h4>{book.description}</h4>
            </div>
            <div className='pages'>
               {pages.map((page) => (
                  <>
               {page.page_pic && (
                     <img src={page.page_pic}/>
                  )}
               {page.page_text && (
                  <p>{page.page_text}</p>
                  )}
                  </>
               ))}
            </div>
         </div>
      )
   } else {
      return (
         <h1>loading...</h1>
      )
   }
}

export default PublishForm;