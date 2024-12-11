import './App.css';

function downloadCV(event, fileName) {
  event.preventDefault(); // Prevent default anchor behavior

  // Open the file in a new tab
  window.open(fileName, '_blank');

  // Trigger the download
  const link = document.createElement('a');
  link.href = fileName;
  link.download = 'CV_LeonardoAmadoBrito.pdf';
  link.click();
}

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://www.linkedin.com/in/leonardo-amado-brito/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" className="logo" alt="Linkedin logo" />
        </a>
        <a href="https://github.com/leobt23" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" className="logo" alt="Github logo" />
        </a>
        <a href="CV_LeonardoAmadoBrito.pdf" target="_blank" onClick={(e) => downloadCV(e, 'CV_LeonardoAmadoBrito.pdf')}>
          <img src="/cv2.svg" className="logo" alt="CV logo" />
        </a>

        </div>
          {/* Chatbot Section */}
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', maxWidth: '400px', margin: '0 auto' }}>
            <h3 style={{ margin: '0 0 10px' }}>Chatbot</h3>
            <div style={{ height: '150px', overflowY: 'auto', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '8px', color: 'black'}}>
              <p>Chatbot: Hello! How can I assist you today?</p>
              {/* Add more chatbot interactions here */}
            </div>
            <input
              type="text"
              placeholder="Type your message..."
              style={{
                width: '90%',
                marginTop: '10px',
                padding: '8px',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
          </div>
    </div>
  );
}

export default App;
