import React, { useState } from 'react';

const App: React.FC = () => {
  const hobbies: string[] = ['Reading', 'Coding', 'Running'];
  const [showMore, setShowMore] = useState<boolean>(false); 
  const apple : string = 'data:image/jpeg;base64,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';

  return (
    <div>
      <h1>Anna Higgins</h1>
      <p>Hello! I’m Anna.</p>
      <img src={apple} alt="Profile" />

      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Hide Details' : 'Show More'}
      </button>

      {showMore && (
        <div>
          <h3>More about me</h3>
          <p>I am currently learning React and enjoying it a lot!</p>
        </div>
      )}
    </div>
  );
};

export default App;
