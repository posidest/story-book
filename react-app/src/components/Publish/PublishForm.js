import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Publish.css'

const PublishForm = (tempId) => {
   const me = useSelector(state => state.session.user)
   const pages = useSelector(state => state.page.pages)
   const book = useSelector(state => state.book)
   const dispatch = useDispatch()
   // console.log(book, 'book from publish form page')
   // console.log(pages, 'pages from publish form page')
   const [title, setTitle] = useState(book.book.title)
   const [image, setImage] = useState(book.book.image)
   const [leaves, setLeaves] = useState([])
   const [description, setDescription] = useState(book.book.description)
   const hidden = 'hidden'
   const inputClasses = ['titleInput', 'coverInput', 'descriptionInput']
   // const [title, setTitle] = useState(book.book.title)
   // const [title, setTitle] = useState(book.book.title)
   useEffect(() => {
      setLeaves(pages)
   },[pages])
   
   if (!me) return ( 
      <Redirect to='/'/>
      )
      

   const updateTitle = (e) => {
      setTitle(e.target.value)
   }

   const showField = (e) => {
      // const field = document.querySelectorAll(`.${className}`)
      // const field = e.target.closest('input')
      const field = document.querySelectorAll(`.${inputClasses[0]}`)[0]
      console.log(field)
      field.classList.contains(hidden) ?
      field.classList.remove(hidden) :
      field.classList.add(hidden)
   }
   
   console.log({...book.book, ...pages}, 'to publish')
   console.log(leaves, 'leaves')
   const publishBook = (e) => {
      e.preventDefault()
      // const toPublish = {title, cover: image, description, category: book.book.category, leaves}
      // dispatch(publishBook({...book.book, ...pages}))
   }

   if (pages && book) {
      return (
         <div className='publish'>
            <form onSubmit={publishBook}>
               <div className='cover'>
                  <h1>{book.book.title}</h1>
                  <input 
                  type='text'
                  className={`${hidden} ${inputClasses[0]}`}
                  value={title}
                  onChange={updateTitle}
                  />
                  <button type='button' className='edit-btn' onClick={showField}>edit</button> 
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

            </form>
         </div>
      )
   } else {
      return (
         <h1>loading...</h1>
      )
   }
}

export default PublishForm;