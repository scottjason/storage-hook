import { useState, useEffect } from 'react';
import { getLoyaltyKey } from '../utils/loyaltyUtil';

const THIRTY_MINUTES = 1800 * 1000;

export const useLoyaltyStorage = (defaultValue = null) => {
  const key = getLoyaltyKey();
  const stored = localStorage.getItem(key);
  const state = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(state);

  const isExpired = createdAt => Date.now() - createdAt >= THIRTY_MINUTES;

  const clearLoyaltyStorage = partialKey => {
    Object.keys(localStorage)
      .filter(key => key.startsWith(partialKey))
      .forEach(key => localStorage.removeItem(key));
  };

  useEffect(() => {
    const isSignIn = window.location.pathname.includes('/my-account/sign-in');
    const isStorageExpired = value && isExpired(value.createdAt);
    if (isSignIn || isStorageExpired) {
      const partialKey = key.split('-').splice(0, 2).join('-');
      clearLoyaltyStorage(partialKey);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
