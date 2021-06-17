import React from 'react'
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom'

const Splash = () => {
   const me = useSelector(state => state.session.user)

   if(me) {
      return <Redirect to="/library" />;
   }


   return (
      <div>
         <h1>Story Book</h1>
         <h4>What's the story, morning glory?</h4>
      </div>
   )
}

export default Splash;