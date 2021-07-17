const SET_BOOK = 'book/setBook';
const ADD_BOOK = 'book/addBook';
const REMOVE_BOOK = 'book/removeBook';


const setBook = (book) => ({
  type: SET_BOOK,
  book,
})

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
})

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
})


// export const getBooks = () => async (dispatch) => {
//   const res = await fetch('/api/books');
//   const data = await res.json();
//   dispatch(setProject(data.books))
//   return res;
// }


export const createBook = (book) => async (dispatch) => {
    const { temp_id, user_id, title, category_id, cover, description, image} = book;
    const res = dispatch(addBook(book))
    return res.book
}


// export const publishBook = (book) => async (dispatch) => {
//   const {user_id, title, category_id, keywords, cover, description} = book;
//    const res = await fetch('/api/books', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       user_id, 
//       title, 
//       category_id, 
//       keywords, 
//       cover, 
//       description
//     })
//   });
//   if (res.ok) {
//     const data = await res.json()
//     console.log(data, 'data from thunk')
//     dispatch(addBook(data.book))
//     console.log(res, 'res from thunk')
//     return data;
//   }
// }


// export const deleteBook = () => async (dispatch) => {
//   const res = await fetch('/api/books', {
//     method: 'DELETE',
//   });
//   dispatch(removeProject());
//   return res;
// }

function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case ADD_BOOK:
      newState = { ...state };
      newState['book'] = action.book;
      return newState;
    case SET_BOOK:
      newState = {...state};
      newState['books'] = []
      action.project.forEach(item => {
        let book = {[item.id]: item}
        newState['books'].push(book)
      });
      return newState;
    case REMOVE_BOOK:
      return { ...state, book: null };
    default:
      return state;
  }
}

export default reducer
