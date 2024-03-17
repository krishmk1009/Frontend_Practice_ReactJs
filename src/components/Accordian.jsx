import React, { useState } from 'react';
import data from '../constant/data.json';
import './style.css';

const Accordion = ({ elements }) => {
  const [current, setCurrent] = useState(null);

  const handleClick = (index) => {
    setCurrent(current === index ? null : index);
  };

  return (
    <div className="accordion">
      {elements.map((element, index) => (
        <div className="accordion-single" key={index}>
          <h1 onClick={() => handleClick(index)}>{element.heading}</h1>
          {current === index && (
            <div className="accordion-content">
              <p>{element.description}</p>
              {element.subElements.length > 0 && (
                <Accordion elements={element.subElements} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return <Accordion elements={data.elements} />;
};

export default App;
