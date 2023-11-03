import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';

const MarketplaceAdd = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f5f5f5' }}>
      <div style={{ width: '60%', padding: 16, background: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }} onSubmit={handleSubmit}>
          <Typography variant="h4">Add to Marketplace</Typography>

          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span">
              Upload Image
            </Button>
          </label>

          {imagePreview && <img style={{ width: '50%', maxHeight: '150px', objectFit: 'contain', marginBottom: '16px' }} src={imagePreview} alt="Uploaded Image Preview" />}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
            <TextField required label="Price" type="number" variant="outlined" />
            <TextField required label="Date Listed" type="date" variant="outlined" InputLabelProps={{ shrink: true }} />
            <TextField required label="Lister Name" pattern="[A-Za-z]+" variant="outlined" helperText="Only alphabets allowed" />
            <TextField required label="Contact Information" placeholder="Cell Number or Email" variant="outlined" />
            <TextField required label="Address" multiline rows={3} variant="outlined" />



            <Button
              style={{ alignSelf: 'center', marginTop: '16px' }}
              type="submit"
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarketplaceAdd;
