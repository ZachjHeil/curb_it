import React, { useState } from 'react';
import { styled } from '@mui/system';
import { TextField, Button, MenuItem, Typography, Container } from '@mui/material';
import { DropzoneArea } from 'material-ui-dropzone';

const BackgroundContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #83a4d4, #b6fbff)',
  animation: 'backgroundAnimation 10s ease infinite',
  '@keyframes backgroundAnimation': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
}));

const FormContainer = styled(Container)(({ theme }) => ({
  maxWidth: 'sm',
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  background: 'rgba(255, 255, 255, 0.9)',
}));

const FieldContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

function MarketplaceAdd() {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    price: '',
    address: '',
    dateListed: '',
    availability: 'Available',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (files) => {
    setFormData({
      ...formData,
      image: files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    console.log('Form Data:', formData);
  };

  return (
    <BackgroundContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <Typography variant="h4">Add to Marketplace</Typography>
          <DropzoneArea
            onChange={handleImageChange}
            acceptedFiles={['image/*']}
            dropzoneText="Drag and drop an image here or click"
            filesLimit={1}
          />
          <FieldContainer>
            <TextField
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              name="price"
              label="Price (CAD)"
              variant="outlined"
              value={formData.price}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: <span>$</span>,
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              name="address"
              label="Address"
              variant="outlined"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              name="dateListed"
              label="Date Listed"
              variant="outlined"
              type="date"
              value={formData.dateListed}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              fullWidth
              select
              name="availability"
              label="Availability"
              variant="outlined"
              value={formData.availability}
              onChange={handleChange}
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Not Available">Not Available</MenuItem>
            </TextField>
          </FieldContainer>
          <SubmitButton
            type="submit"
            color="primary"
            variant="contained"
          >
            Submit
          </SubmitButton>
        </StyledForm>
      </FormContainer>
    </BackgroundContainer>
  );
}

export default MarketplaceAdd;
