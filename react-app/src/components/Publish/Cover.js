import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {createBook} from '../../store/book';
import './Publish.css'

const Cover = ({form, setForm, tempId, setTempId}) => {
    const [image, setImage] = useState(null);
    // const [imageLoading, setImageLoading] = useState(false);
    const [cover, setCover] = useState(null)
    const [userId, setUserId] = useState(0)
    const [categoryId, setCategoryId] = useState(0)
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    // const [keywords, setKeywords] = useState([])
    // const [kws, setKws] = useState([])
    const history = useHistory()
    const me = useSelector(state => state.session.user)
    const book = useSelector(state => state.book)
    // console.log(book)
    // const kws = []
    const dispatch = useDispatch()

    const moveOn = (e) => {
        e.preventDefault()
        const randomNum = Math.floor(Math.random() * 1000);
        dispatch(createBook({temp_id: randomNum, cover, user_id: me.id, category_id: categoryId, description, image, title}))
        const formType = 'page'
        setTempId(randomNum)
        setForm(formType)
    }

    const cancel = (e) => {
        history.push('/library')
        // setProject({...project, 'user_id': userId})
    }

    useEffect(() => {
        if(book) {
            setCover(book.cover)
            setTitle(book.title)
            setCategoryId(book.category_id)
            // setKeywords(book.keywords)
            setDescription(book.description)
        }
    },[])

   const updateImage = (e) => {
    let file = e.target.files[0]
    setCover(file)
    file = URL.createObjectURL(file)
    setImage(file)
  }

//   const updateKeywords = (e) => {
//     setKws(...kws, e.target.value)
//     //   setKeywords(...kws)
//   }

//   const enoughKeywords = (e) => {
//     setKws(...kws, e.target.value)
//     setKeywords(kws)
//   }
    
    return (
        <div className='add-cover'>
            <div>
                <h1>Add A Cover Image</h1>
                <form onSubmit={moveOn} className='cover-form'>
                    <div className='bookTitle'>
                        <input 
                        type='text'
                        name='title'
                        placeHolder='Title'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        />
                    </div>
                    <div className='upload-photo'>
                        <label className='file-input'>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                            />
                        Upload an Image
                        </label>
                        {/* <div>
                            <button type="submit">Done</button>
                        </div> */}
                        <div className='image'>
                        {image && (
                            <img 
                            src={image}
                            style={{width: '500px'}} 
                            />
                        )}   
                        </div>
                    </div>
                    <div className='description-div'>
                    <textarea
                        name='description' 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder = 'Add a Description'
                        />
                    </div>
                    <div className='category-id'>
                        <select 
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}>
                            <option value='0'>Choose a Category</option>
                            <option value='1'>Fairy Tale</option>
                            <option value='2'>Dinosaurs</option>
                            <option value='3'>Family</option>
                            <option value='4'>Animals</option>
                            <option value='5'>Adventure</option>
                            <option value='6'>Biography</option>
                        </select>
                    </div>
                    {/* <div className='keywords'>
                    <label>Add Keywords</label>
                    <div className='keyword'>
                        <input type='text'
                        // value={keywords}
                        onChange={updateKeywords} />
                    </div>
                    <div>
                        <input type='text'
                        // value={keywords}
                        onChange={enoughKeywords}/>
                    </div> */}
                    {/* {keywords.length >= 2  && (
                        <div>
                        <input type='text'
                        // value={keywords}
                        onChange={updateKeywords} />
                        </div>
                    )}
                    {keywords.length >= 3 && (
                        <div>
                        <input type='text'
                        //   value={keywords}
                            onChange={updateKeywords} />
                        </div>
                    )} */}
                    {/* </div> */}
                    <div className='submit-btns'>
                        <button type='submit'>Done! Let's add a page.</button>
                        <button type='button' onClick={cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Cover