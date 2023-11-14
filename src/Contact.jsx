import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validate name
    if (!name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name is required',
      }));
    }

    // Validate email
    if (!email.trim() || !isValidEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    }

    // If there are no errors, proceed with form submission
    if (!errors.name && !errors.email) {
      setIsLoading(true);

      try {
        // Perform the logic to send the form data
        const response = await sendFormDataToServer(formData);

        // Check the response from the server
        if (response.status === 200) {
          setIsMessageSent(true);
          setErrorMessage('');
        } else {
          setIsMessageSent(false);
          setErrorMessage('Error: Unable to send the message.');
        }
      } catch (error) {
        console.error('Error:', error);
        setIsMessageSent(false);
        setErrorMessage('Error: Unable to send the message.');
      }

      setIsLoading(false);

      // Reset form data after submission
      setFormData(initialFormData);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const sendFormDataToServer = async (formData) => {
    // Use fetch or Axios to make a request to your server
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    return response;
  };

  return (
    <div>
      <h1 id="contact">Contact Me</h1>
    
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
        {isMessageSent && <p style={{ color: 'green' }}>Your message was sent!</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <div>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="name"
              />
            </div>
            <div className="error">{errors.name}</div>
          </div>

          <div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
              />
            </div>
            <div className="error">{errors.email}</div>
          </div>

          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;