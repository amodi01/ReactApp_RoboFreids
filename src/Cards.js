import React from 'react';

const cards = ({name,email,id}) => {
   
    const imgsrc='https://robohash.org/' + id
    return (

        <div className='tc bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5' >
            <img alt='robots' src={imgsrc} ></img>
            <div>
               
                <h2>{name} </h2>
                <p>{email}</p>
            </div>
        </div>
    )

}

export default cards;