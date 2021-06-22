const SET_PAGES = 'page/setPages'
const ADD_PAGE = 'page/addPage'
const POST_PAGES = 'page/postPages'
// const ADD_STEP_MEDIA = 'steps/addStepMedia'

const setPages = (pages) => ({
  type: SET_PAGES,
  pages,
})

const addPage = (page) => ({
  type: ADD_PAGE,
  page
})

const postPages = (pages) => ({
  type: POST_PAGES,
  pages
})


// const addStepMedia = (media) => ({
//   type: ADD_STEP_MEDIA,
//   media
// })


export const addAPage = (page) => async (dispatch) => {
  // const {temp_id, step_count, step_title, step_imgs, step} = newStep
  const res = dispatch(addPage(page))
  // const data = await res.json()
  return res.page;
}


// export const addStepImagery = (media) => async (dispatch) => {
//   const {step_count, temp_id, step_imgs} = media;
//   let res = dispatch(addStepMedia(media))
//   res = await res.json()
//   console.log(res, 'res from addStepImagery thunk')
//   return res.media;
// }


// export const publishPages = (pages, book_id) => async (dispatch) => {
//   const res = []
//   for(let i = 0; i < pages.length; i++) {
//     let {page_number, page_pic, page_text} = pages[i];
//     let result = await fetch('/api/pages', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(
//         {project_id, 
//         step_count, 
//         step_title, 
//         step_imgs, 
//         step})
//   })
//   // result = await result.json()
//   res.push(result)
// }
//   // let data = await res.json();
//   dispatch(postPages(res))
//   return res
// }


// export const getCurrentSteps = (projectId) => async (dispatch) => {
//   const res = await fetch(`/api/steps/${projectId}`);
//   const data = await res.json();
//   dispatch(setSteps(data.steps))
//   return res;
// }


function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_PAGES:
      newState = {};
      action.pages.forEach(page => {
        newState[page.id] = page
      })
      // newState['steps'] = action.steps
      return newState;
   //  case ADD_STEP_MEDIA:
   //    newState = {...state}
   //    newState['step_media'] = action.media ;
   //    return newState;  
    case ADD_PAGE:
      newState = {...state}
      newState['pages'] = []
      newState['pages'].push(action.page);
      return newState;
    default:
      return state;
  }
}

export default reducer
