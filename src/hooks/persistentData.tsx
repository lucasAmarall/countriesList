import { useEffect, useState } from "react";

const persistentData = <T extends unknown>(key: string, defaultValue: T)  => {
  const [state, setState] = useState<T>((): T => {
    const storageValue = localStorage.getItem(key);
    if(storageValue) return JSON.parse(storageValue);
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  
  return {state, setState};
};

export default persistentData;