import React, { useState } from 'react';

const BubbleSortVisualization = () => {
  const [array, setArray] = useState([5, 3, 8, 2, 1, 4]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSorting, setIsSorting] = useState(false);

  const bubbleSortStep = () => {
    if (currentIndex >= array.length - 1) {
      setIsSorting(false);
      return;
    }

    let tempArray = [...array];
    let swapped = false;

    for (let i = 0; i < tempArray.length - 1 - currentIndex; i++) {
      if (tempArray[i] > tempArray[i + 1]) {
        let temp = tempArray[i];
        tempArray[i] = tempArray[i + 1];
        tempArray[i + 1] = temp;
        swapped = true;
      }
    }

    setCurrentIndex(currentIndex + 1);
    setArray(tempArray);
    setIsSorting(swapped);
  };

  const resetSorting = () => {
    setArray([5, 3, 8, 2, 1, 4]);
    setCurrentIndex(0);
    setIsSorting(false);
  };

  return (
    <div>
      <h2>Bubble Sort Visualization</h2>
      <div>
        <p>Array: [{array.join(', ')}]</p>
        <p>Comparing: {array[currentIndex]} and {array[currentIndex + 1]}</p>
      </div>
      <button onClick={bubbleSortStep} disabled={!isSorting}>
        Next
      </button>
      <button onClick={resetSorting}>Reset</button>
    </div>
  );
};

export default BubbleSortVisualization;
