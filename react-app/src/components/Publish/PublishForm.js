import React from 'react'
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Publish.css'

const PublishForm = (tempId) => {
   const me = useSelector(state => state.session.user)
   const pages = useSelector(state => state.page.pages)
   const book = useSelector(state => state.book)
   console.log(book, 'book from publish form page')
   console.log(pages, 'pages from publish form page')
   if (!me) return ( 
   <Redirect to='/'/>
   )

   if (pages && book) {
      return (
         <div className='publish'>
            <div className='cover'>
               <h1>{book.book.title}</h1>
               <img src={book.book.image} alt='book-cover'/>
               <h4>{book.book.description}</h4>
            </div>
            <div className='pages'>
               {pages.map((page) => (
                  <>
               {page.page_pic && (
                     <img src={page.image}/>
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