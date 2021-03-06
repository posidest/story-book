import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {addAPage} from '../../store/page'
import Video from '../Video'
import StepForm from "./ProjectCreationPage/StepForm";
import './Publish.css'
// import {useDispatch} from 'react-redux'

const PageForm = ({form, setForm, tempId}) => {
    const [type, setType] = useState('image')
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState('');
    const [code, setCode] = useState('')
    const [pagePic, setPagePic] = useState(null)
    const [addText, setAddText] = useState(false)
    const [pageText, setPageText] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const dispatch = useDispatch()
    const book = useSelector(state => state.book)
    const me = useSelector(state => state.session.user)
    // const pages = useSelector(state => state.page.pages)
    console.log(tempId, 'tempId from pageform')
    // if (book) console.log(book, 'book in page form')

    const handlePage = () => {
        if (image) {
            dispatch(addAPage({
                user_id: me.id, 
                temp_id: tempId, 
                page_pic: pagePic,
                image: image, 
                page_number: pageNumber, 
                page_text: pageText 
            }))
        }
        else if (video) {
            dispatch(addAPage({
                user_id: me.id, 
                temp_id: tempId, 
                page_pic: video, 
                page_number: pageNumber, 
                page_text: pageText, 
            }))           
        }
        else {
            dispatch(addAPage({
                user_id: me.id, 
                temp_id: tempId, 
                page_pic: null, 
                page_number: pageNumber, 
                page_text: pageText 
            }))    
        }
    }


    const moveOn = async(e) => {
        e.preventDefault()
        handlePage()    
        setPageNumber(pageNumber+1)
        setAddText(false)
        setPagePic(null)
        setImage(null)
        setPageText('')
    }
    
    const done = (e) => {
        e.preventDefault()
        handlePage()
        const formType = 'publish'
        setForm(formType)
    }
    
    const back = () => {
        setForm('book')
   }

    
    const updateImage = (e) => {
        e.preventDefault()    
        let file = e.target.files[0]
        setPagePic(file)
        file = URL.createObjectURL(file)
        setImage(file)
        setAddText(true)
    }


    const embedVideo = (e) => {
        e.preventDefault()
        const array = video.split('/')
        const embedCode = array[array.length - 1]
        setCode(embedCode)
        setAddText(true)
    }

    if (book) {
        return (
            <div className='page-form-page'>
                <h1>{`Page ${pageNumber} Image`}</h1>
                <div className='uploadNav'>
                    <div className='imageUpload'>  
                        <p 
                        onClick={() => setType('image')}>
                        Upload Photos
                        </p>
                    </div>
                    <div className='embedVideo'>
                        <p onClick={() => setType('video')}>
                        Embed a Video
                        </p>
                    </div>
                </div>
                {type === 'image' && (
                <form>
                    <div className='upload-photo'>
                        <label className='file-input'>
                            <input
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                            />
                            Upload Image
                        </label>
                        <div>
                            <img 
                            src={image}
                            style={{width: '500px'}} 
                            />
                        </div>
                    </div>
                </form>
                )}
                {type === 'video' && (
                <form onSubmit={embedVideo}>
                    <div className='video-input'>
                        <input
                        name='video'
                        type='url'
                        onChange={(e) => setVideo(e.target.value)}
                        value={video}
                        />
                        <button type="submit">Embed Video</button>
                        {video && (
                        <div>
                            <Video embedId={code}/>
                        </div>
                        )}
                    </div>
                </form>
                )}
                {/* <button type="button" onClick={moveOn}>Add Step Body</button> */}
                {addText && (
                    <div>
                        <form onSubmit={moveOn}>
                            <div>
                                <textarea
                                name='pageText' 
                                value={pageText}
                                onChange={(e) => setPageText(e.target.value)} 
                                placeholder={`page ${pageNumber} text`}
                                />
                            </div>
                            <div>
                                <button type='submit'>Add Page</button>
                                <button type='submit' onClick={done}>Publish</button>
                            </div>
                        </form>
                        <button type='button' onClick={back}>Edit Cover and Details</button>
                    </div>
                )}
            </div>
        )
    } else {
        return <h1>...loading</h1>
    }
}
    

export default PageForm;