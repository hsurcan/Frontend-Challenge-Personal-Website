import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

  // Başlangıç değerini localstorage'dan alıyoruz
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      // değer varsa parse et, yoksa başlangıç değerini kullan
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("LocalStorage Set Error:", error);
    }
  };

  return [storedValue, setValue];
};