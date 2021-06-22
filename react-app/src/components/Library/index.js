import React from 'react'
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Library = () => {
   const me = useSelector(state => state.session.user)

   if (!me) return ( 
      <Redirect to='/'/>
   )

   return (
      <div>
         <h1>Hi {me.username}, Welcome to the Library</h1>
         <img src={me.avatar} alt='my-avatar'/>
         <p>{me.bio}</p>
         <Link to='/publish'>Publish a Book</Link>
      </div>
   )
}


export default Library;