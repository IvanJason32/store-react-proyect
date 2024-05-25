import { useState } from 'react';

const useLoginPost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginDo = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://store-api-backend-steel.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.success) {
            setLoading(false);
            return data.data.token; 
          } else {
            throw new Error(data.message); 
          }
      } else{
        throw new Error('Error al conectar con el servidor.');
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { loginDo, loading, error };
};

export default useLoginPost;


