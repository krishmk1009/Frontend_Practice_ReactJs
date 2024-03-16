import React, { useState } from 'react'
import data from "../constant/data.json"
import "./style.css"
const Accordian = () => {
    const [current, setCurrent] = useState(null);

    const handleClick = (index) => {

        setCurrent(current === index ? null : index)
    }

    return (
        <div className='accordian'>

            {data.elements.map((element, index) => {
                return (
                    <div className='accordian-single' key={index }>
                        <h1 onClick={()=> handleClick(index)}  >{element.heading}</h1>

                        {current === index && <p >{element.description}</p>}

                    </div>
                )
            })}

        </div>
    )
}

export default Accordian