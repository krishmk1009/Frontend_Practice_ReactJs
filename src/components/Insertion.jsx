import React, { useEffect, useState } from 'react';
import './style.css';

const Insertion = () => {
    const [arr, setArray] = useState([21, 4, 97, 56, 15, 16]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [sortedArr, setSortedArr] = useState([])

    useEffect(() => {

        const temp = [...arr];

        temp.sort((a, b) => a - b);
        setSortedArr(temp)

    })

    const handleBack = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
            setArray([...arr]); 
        }
    };

    const handleNext = () => {
        if (currentIndex < arr.length) {
            const currentElement = arr[currentIndex];
            let j = currentIndex - 1;
            while (j >= 0 && arr[j] > currentElement) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = currentElement;
            setCurrentIndex(currentIndex + 1);
            setArray([...arr]); 
        }
    };

    return (
        <div>
            <h1>Insertion Sort</h1>
            <div className='insertion_container'>
                {arr.map((element, index) => (
                    <div
                        key={index}
                        className={ element === sortedArr[index] ? "element_green" : "element_normal"}
                        style={{ height: element * 3 + 'px' }}
                    >
                        {element}
                    </div>
                ))}
            </div>
            <div>
                <button onClick={handleBack} className='insertion_button'>
                    Back
                </button>
                <button onClick={handleNext} className='insertion_button'>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Insertion;
