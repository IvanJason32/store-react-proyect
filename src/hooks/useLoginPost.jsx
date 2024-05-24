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
            return data.data.token; // Devuelve el token si el inicio de sesión es exitoso
          } else {
            throw new Error(data.message); // Lanza un error si las credenciales son inválidas
          }
      } else{
        throw new Error('Error al conectar con el servidor.');
      }
        // throw new Error('Error al iniciar sesión. Por favor, revisa tus credenciales e intenta de nuevo.');

    //   const data = await response.json();
    //   setLoading(false);
    //   return data;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { loginDo, loading, error };
};

export default useLoginPost;
