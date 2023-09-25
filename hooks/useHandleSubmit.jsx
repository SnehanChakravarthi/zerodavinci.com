'use client';

import state from '@/store';
import { useState } from 'react';
import { useSnapshot } from 'valtio';
const useHandleSubmit = () => {
  const [alertMessage, setAlertMessage] = useState(null);

  const snap = useSnapshot(state);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.fullName.value,
      email: e.target.email.value,
    };

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        console.log('Name and Email added to Newsletter');
        setAlertMessage('Thanks for joining the Zero Da Vinci newsletter!');
        state.subscribed = true;
      } else if (result.error) {
        console.log(result.error);
        if (result.error.includes('already a list member')) {
          setAlertMessage('You are already subscribed!');
          state.subscribed = true;
        } else if (result.error.includes('provide a valid email address')) {
          setAlertMessage('Please provide a valid email address');
        } else {
          setAlertMessage('Something went wrong, please try again.');
        }
      }
    } catch (error) {
      console.error('Fetch failed:', error);
      setAlertMessage('Failed to connect to the server.');
    }
  };

  return { handleSubmit, alertMessage };
};

export default useHandleSubmit;
