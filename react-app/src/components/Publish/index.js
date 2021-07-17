import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Cover from './Cover';
import PageForm from './PageForm';
import PublishForm from './PublishForm';

const Publish = () => {
   const [form, setForm] = useState('book')
   const me = useSelector(state => state.session.user)
   const book = useSelector(state => state.book)
   // const [publish, setPublish] = useState(false)
   const [tempId, setTempId] = useState(null)   
   const pages = useSelector(state => state.page.pages)
   let display; 
   console.log(book, 'book on publish page')
   console.log(pages, 'pages from publish page')
   console.log(book.temp_id, 'tempId of book')

   useEffect(() => {
      if(book.temp_id) {
         // setForm('page')
         setTempId(book.temp_id)
      }
   },[book, tempId])



   if(!me) return (
      <Redirect to='/'/>
   )

   
   if(form === 'book') {
      display = (
         <>
         <Cover form={form} setForm={setForm} tempId={tempId} setTempId={setTempId}/>
         </>
      )
   }
   
   else if(form === 'page') {
      display = (
         <>
            <PageForm form={form} setForm={setForm} tempId={tempId}/>
         </>
      )
   } 

   else if(form === 'publish') {
      display = (
         <>
            <PublishForm form={form} setForm={setForm} tempId={tempId}/>
         </>
      )
   }
   
   else {
      display =  (
         <h1>What is happening?</h1>
      )
   }


   return (
      <>
      {display}
      </>
   )
}

export default Publish;