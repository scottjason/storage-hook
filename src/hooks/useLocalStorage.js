import { useState, useEffect } from 'react';
import { getLoyaltyKey } from '../utils/loyaltyUtil';

const THIRTY_MINUTES = 1800 * 1000;

export const useLoyaltyStorage = (defaultValue = null) => {
  const key = getLoyaltyKey();
  const stored = localStorage.getItem(key);
  const state = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(state);

  const isExpired = createdAt => {
    const currentTime = Date.now();
    return createdAt && currentTime - createdAt >= THIRTY_MINUTES;
  };

  useEffect(() => {
    if (value && isExpired(value.createdAt)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
