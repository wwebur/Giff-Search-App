import {useState} from "react";

interface User {
  id: string;
  username: string;
  password: string;
  fullname: string;
}

const useLocalStorage = (key: any, initialValue: any) => {
  const [storedValue, setStoredValue] = useState<any>(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
