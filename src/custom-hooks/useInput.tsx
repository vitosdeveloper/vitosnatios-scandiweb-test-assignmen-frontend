import { useCallback, useState } from 'react';

const useInput = (initialValue: any) => {
  const [state, setState] = useState<string>(initialValue);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    },
    []
  );

  return { value: state, onChange: handleInputChange };
};

export default useInput;
