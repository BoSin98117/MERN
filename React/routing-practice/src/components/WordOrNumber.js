import React from 'react';
import {useParams} from 'react-router-dom';


const WordOrNumber = (props) => {

    const {param, colorText, colorBackground} = useParams();

    return (
        <div>
            {
                isNaN(param)?
                <p style={{color:colorText, backgroundColor:colorBackground}}  >This word is: {param}</p>
                :<p>This number is: {param}</p>
            }

        </div>
    )
}

export default WordOrNumber;