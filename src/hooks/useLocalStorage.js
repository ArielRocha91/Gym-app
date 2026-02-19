import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      if (storedValue === null || storedValue === "undefined") {
        return initialValue;
      }

      return JSON.parse(storedValue);
    } catch (error) {
      console.error("Error leyendo localStorage", error);
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;

      setValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error guardando en localStorage", error);
    }
  };

  return [value, setStoredValue];
}

export default useLocalStorage;