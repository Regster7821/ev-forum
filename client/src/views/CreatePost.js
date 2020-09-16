import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from '@reach/router';
import ContentContainer from '../components/ContentContainer';

export default function CreatePost(props) {
    const { onSubmitProp } = props;
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');
    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [body, setBody] = useState('');
    const [bodyError, setBodyError] = useState('');

    const onSubmitHandlerPost = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/posts/create', {
            title,
            subject,
            body
        })
        // onSubmitProp({title, subject, body})
        .then((res)=> {
            console.log(res)
            if (res.data.error) {
                console.log(res.data.error.errors)
                if (res.data.error.errors.title) {
                    setTitleError(res.data.error.errors.title.message)
                }
                if (res.data.error.errors.subject) {
                    setSubjectError(res.data.error.errors.subject.message)
                }
                if (res.data.error.errors.body) {
                    setBodyError(res.data.error.errors.body.message)
                }
            }
        })
    };

    return (
        <div className='Container'>
            <Navbar />
            <div className='CreatePostContentContainer'>
                <p className='TitleError'>{ titleError }</p>
                <p className='SubjectError'>{ subjectError }</p>
                <p className='BodyError'>{ bodyError }</p>
                <h1 className='CreatePostContentHeader'>create a post</h1>
                <form className='CreatePostForm' onSubmit={ onSubmitHandlerPost }>
                    <input className='CreatPostFormTitle' type='text' name='title' placeholder='title' onChange = { e => setTitle(e.target.value) }></input>
                    <input className='CreatPostFormSubject' type='text' name='subject' placeholder='subject' onChange = { e => setSubject(e.target.value) }></input>
                    <textarea className='CreatPostFormBody' type='text' name='body' placeholder='content' onChange = { e => setBody(e.target.value) }></textarea>
                    <button className='CreatePostSubmitButton' onClick={ onSubmitHandlerPost }><Link className='SubmitLink' to='/posts'>create</Link></button>
                </form>
            </div>
        </div>
    )
}