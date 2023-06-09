import { useRef, useState } from "react";

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value as string);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } else {
      return defaultValue;
    }
  });

  const setLocalStorage = (valueOrFn: ((data: T) => T) | T) => {
    let newValue;

    if (valueOrFn instanceof Function) {
      newValue = valueOrFn(value);
    } else {
      newValue = valueOrFn;
    }
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return {
    value,
    setLocalStorage,
  };
};
