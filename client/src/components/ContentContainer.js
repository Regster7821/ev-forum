import React from 'react';

export default (props) => {
    const { header } = props;

    return (
        <div className='ContentContainer'>
            <h1 className='ContentHeader'>{ header }</h1>

        </div>
    )
}