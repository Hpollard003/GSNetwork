import React from 'react'

const Board = (props) => (
    <div>
        <div className='card m-2 bg-primary bg-gradient'>
            <div className='text-center'>
            {/* this organizes the Board card using props */}
                <h1>{props.name}</h1>
                <h1>{props.desc}</h1>
                <h3>Location - {props.location}</h3>
                <h3>${props.price}</h3>
            </div>
        </div>
    </div>
);

export default Board