import React from 'react';
import { Link } from '@reach/router';

export default props => {


    return (
        <div className='NavbarContainer'>
            <Link to='/posts' className='NavbarLinksLeft'>posts</Link>
            <Link to='/home' className='NavbarTitle'>it's electric</Link>
            <Link to='/login' className='NavbarLinksRight'>login/signup</Link>
        </div>
    )
}