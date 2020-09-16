import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/')
            .then(res => setPosts(res.data));
    }, [])

    return (
        <div className='Container'>
            <Navbar />
            <div className='ContentContainer'>
                <h1 className='ContentHeader'><Link className='HeaderLink' to='/createpost'>create a post</Link></h1>
                    {posts.map((post, idx) => {
                        return (
                            <div className='SinglePostContainer'>
                                <h2 className='SinglePostTitle' key={idx}><Link className='PostTitleLink' to={`/post/${post._id}`}>{ post.title }</Link></h2>
                                <p className='SinglePostSubject' key={idx}>{ post.subject }</p>
                                <p className='SinglePostBody' key={idx}>{ post.body }</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}