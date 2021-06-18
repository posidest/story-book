import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Cover from './Cover';
import PageForm from './PageForm';

const Publish = () => {
   const [form, setForm] = useState('book')
   const me = useSelector(state => state.session.user)
   const book = useSelector(state => state.book)
   const pages = useSelector(state => state.page.pages)
   const [publish, setPublish] = useState(false)
   console.log(book, 'book on publish page')
   
   useEffect(() => {
      console.log(form)
   },[form, book, pages])



   if(!me) return (
      <Redirect to='/'/>
   )
   
   if(!book.temp_id || form === 'book') {
      return (
         <>
         <Cover form={form} setForm={setForm}/>
         </>
      )
   }

   if(book.temp_id && form === 'page') {
      return (
         <>
            <PageForm form={form} setForm={setForm} setPublish={setPublish}/>
         </>
      )
   } else {
      return (
         <h1>What is happening?</h1>
      )
   }
}

export default Publish;