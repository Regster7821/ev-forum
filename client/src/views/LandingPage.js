import React from 'react';
import Navbar from '../components/Navbar';
import ContentContainer from '../components/ContentContainer';

export default () => {


    return (
        <div className='Container'>
            <Navbar />
            <ContentContainer header='trending'>
                
            </ContentContainer>
        </div>
    )
}