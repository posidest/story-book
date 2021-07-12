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
   const pages = useSelector(state => state.page.pages)
   const [publish, setPublish] = useState(false)
   console.log(book, 'book on publish page')
   
   useEffect(() => {
      if(book.temp_id) {
         setForm('page')
      }
   },[form, book, pages])



   if(!me) return (
      <Redirect to='/'/>
   )
   
   if(form === 'book') {
      return (
         <>
         <Cover form={form} setForm={setForm}/>
         </>
      )
   }

   else if(form === 'page') {
      return (
         <>
            <PageForm form={form} setForm={setForm} setPublish={setPublish}/>
         </>
      )
   } else if(publish) {
      return (
         <>
            <PublishForm publish={publish} setPublish={setPublish}/>
         </>
      )
   }
   
   else {
      return (
         <h1>What is happening?</h1>
      )
   }
}

export default Publish;