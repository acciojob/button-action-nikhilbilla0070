import React, { useState } from 'react';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <div id="main">
      <button id="click" onClick={() => setShowParagraph(!showParagraph)}>
        Show/Hide Paragraph
      </button>
      {showParagraph && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
    </div>
  );
}

export default App;
