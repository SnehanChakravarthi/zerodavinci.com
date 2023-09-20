'use client';

import { useState } from 'react';

const useHandleSubmit = () => {
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.fullName.value,
      email: e.target.email.value,
    };

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
      console.log('Name and Email added to Newsletter');
      setAlertMessage('Thanks for joining the newsletter!');
    } else if (result.error === '400') {
      setAlertMessage('Already signed up');
    } else {
      console.log(result.error);
    }
  };

  return { handleSubmit, alertMessage };
};

export default useHandleSubmit;
