// ErrorMessage.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import '../css/ErrorMessage.css'; // Import the CSS for animations

const ErrorMessage = ({ showError, setShowError }) => {
  useEffect(() => {
    let timeout;
    if (showError) {
      timeout = setTimeout(() => {
        setShowError(false);
      }, 2000); // Set the timeout duration in milliseconds (e.g., 2000ms = 2 seconds)
    }

    return () => clearTimeout(timeout); // Clear the timeout when the component unmounts or when showError changes
  }, [showError, setShowError]);

  return (
    <CSSTransition in={showError} timeout={200} classNames="alert-animation" unmountOnExit>
      <div
        className="alert-container"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        <Alert variant="danger">
          <Alert.Heading>Error!</Alert.Heading>
          <p>Needs to be 5 characters long</p>
        </Alert>
      </div>
    </CSSTransition>
  );
};

export default ErrorMessage;
