import React, { useState } from 'react';
import './ListItemCss.css';

function ListItemScreen() {
  const [quote, setQuote] = useState(null);
  const [image, setImage] = useState(null);

  const getQuote = () => {
    // Dummy function for example purposes
    const randomQuote = (Math.random() * 100).toFixed(2);
    setQuote(randomQuote);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImage(null);
    document.getElementById('imageUpload').value = null;
  };
  return (
    <div className="homepage-container">
      <h1>List Your Item</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} id="imageUpload" className="file-input" />
      {image && <img src={image} alt="Item" className="uploaded-image" />}
      {image && <button onClick={clearImage} className="list-item-button">Clear Image</button>}
      <button onClick={getQuote} className="list-item-button">Get Instant Quote</button>
      {quote && <p className="quote-text">Estimated Removal Cost: ${quote}</p>}
      <button onClick={() => {}} className="list-item-button">List Item for Sale</button>
      <button onClick={() => {}} className="list-item-button">List Item for Free Pickup</button>
    </div>
  );
}

export default ListItemScreen;
