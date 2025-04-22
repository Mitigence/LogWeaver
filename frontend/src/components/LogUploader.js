import React, { useState } from 'react';

function LogUploader() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert(`Uploading ${file.name}`);
    } else {
      alert('No file selected');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleUpload}>Upload Log File</button>
    </div>
  );
}

export default LogUploader;
