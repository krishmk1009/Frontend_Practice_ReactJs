import React, { useState } from 'react';

const obj = {
    bar: ["Checkout", "Address", "Payout", "Confirm"]
};

const ProgressBar = () => {
    const [currentIndex, setCurrentIndex] = useState(-1);

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const handleBack = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const isDisabledNext = currentIndex === obj.bar.length - 1;
    const isDisabledBack = currentIndex === -1;

    return (
        <div>
            <div style={{ width: "1200px", margin: "50px auto" }}>
                <span style={{ margin: "0 5px", display: "inline-block" }}>Start </span>
                {obj.bar.map((element, index) => (
                    <>
                        <span key={index} style={{ height: "10px", borderRadius: "2px", backgroundColor: currentIndex >= index ? "green " : "#87CEEB", display: "inline-block", width: "200px", margin: "0 5px" }}>
                        </span>
                        <span style={{ margin: "0 5px", display: "inline-block" }}>{element} </span>
                    </>
                ))}
            </div>

            <div>
                <button onClick={handleBack} disabled={isDisabledBack}>Back</button>
                <button onClick={handleNext} disabled={isDisabledNext}>Next</button>
                <span> Step : {obj.bar[currentIndex]}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
