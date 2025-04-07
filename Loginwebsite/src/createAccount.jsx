import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Steps } from 'antd';
import './NewAccount.css';
import ThemeToggle from './components/ThemeToggle';

const NewAccount = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 4) setStep(prev => prev + 1);
  };

  const preStep = () => {
    if (step === 0) {
      navigate('/');
    } else {
      setStep(prev => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <input type="text" placeholder="Username" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
          </>
        );
      case 1:
        return (
          <>
            <input type="text" placeholder="Full Name" className="loginInput" />
            <input type="date" placeholder="Birthday" className="loginInput" />
            <input type="text" placeholder="Location" className="loginInput" />
          </>
        );
      case 2:
        return (
          <>
            <input type="email" placeholder="Email" className="loginInput" />
            <input type="tel" placeholder="Phone Number" className="loginInput" />
          </>
        );
      case 3:
        return (
          <>
            <label><input type="checkbox" /> Music</label>
            <label><input type="checkbox" /> Sports</label>
            <label><input type="checkbox" /> Coding</label>
          </>
        );
      case 4:
        return (
          <div className="summary">
            <h2>✅ Check Your All Details</h2>
            <p><strong>Username:</strong> (example_user)</p>
            <p><strong>Full Name:</strong> (Jane Doe)</p>
            <p><strong>Birthday:</strong> (2000-01-01)</p>
            <p><strong>Location:</strong> (Taipei)</p>
            <p><strong>Email:</strong> (jane@example.com)</p>
            <p><strong>Phone:</strong> (0912-345-678)</p>
            <p><strong>Hobbies:</strong> Music, Coding</p>
            <p><strong>Introduction:</strong> I'm passionate about learning new things and coding!</p>
            <button type="submit" className="stepButton">Create Account</button>
          </div>
        );
      default:
        return null;
    }
  };

  const stepsItems = [
    { title: 'Account Info' },
    { title: 'Personal Details' },
    { title: 'Contact' },
    { title: 'Hobby' },
    { title: 'Introduction' },
  ];

  return (
    <div className="newAccountPage">
      <ThemeToggle />
      <div className="stepContainer">
        <Steps current={step} items={stepsItems} />
      </div>

      <div className="formContainer">
        <h1 className="loginText">Create New Account</h1>
        <form onSubmit={e => e.preventDefault()}>
          {renderStepContent()}
          <div className="buttonGroup">
            <button type='button' className='stepButton' onClick={preStep}>
              {step === 0 ? 'Back to Login' : 'Prev'}
            </button>
            {step < 4 && (
              <button type='button' className='stepButton' onClick={nextStep}>
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAccount;
