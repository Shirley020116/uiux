import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Steps } from 'antd';
import './NewAccount.css';
import ThemeToggle from './components/ThemeToggle'; // 若有其他必要的元件可以引入
import { Textarea } from './components/TextArea';  // 引入 Textarea 元件

const NewAccount = () => {
  const [step, setStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
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
  const lastStep = () => {
    // 顯示註冊完成訊息
    alert('Registration completed successfully!');

    // 跳轉到登入頁面
    navigate('/');
  };


  const handleSelect = (option) => {
    setSelectedOptions((prevState) => {
      if (prevState.includes(option)) {
        // 如果選項已被選擇，則移除它
        return prevState.filter((item) => item !== option);
      } else {
        // 如果選項未被選擇，則將其添加
        return [...prevState, option];
      }
    });
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
          <div className="selection-grid">
            <div
              className={`selectable ${selectedOptions.includes('Music') ? 'selected' : ''}`}
              onClick={() => handleSelect('Music')}
            >
              Music
            </div>
            <div
              className={`selectable ${selectedOptions.includes('Sports') ? 'selected' : ''}`}
              onClick={() => handleSelect('Sports')}
            >
              Sports
            </div>
            <div
              className={`selectable ${selectedOptions.includes('Coding') ? 'selected' : ''}`}
              onClick={() => handleSelect('Coding')}
            >
              Coding
            </div>
          </div>
        );
      case 4:
        return (
          <div className="summary">
            <Textarea placeholder="Enter your message..." />
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
      <div className="stepContainer">
        <Steps current={step} items={stepsItems} />
      </div>

      <div className="formContainer">
        <h1 className="loginText">Create New Account</h1>
        <form onSubmit={e => e.preventDefault()}>
          {renderStepContent()}
          <div className="buttonGroup">
            <button type='button' className='stepButton' onClick={preStep}>
              {step === 0 ? 'Home' : 'Prev'}
            </button>
            {step < 4 && (
              <button type='button' className='stepButton' onClick={nextStep}>
                Next
              </button>
            )}
            {step === 4 && (
              <button type='button' className='stepButton' onClick={lastStep}>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAccount;
