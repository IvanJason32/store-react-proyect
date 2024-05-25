import { useState } from "react";

export const useFetchCollection = () => {
  const [data, setData] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState({ err: false });

  const getData = async () => {
    try {
      setIsPending(true);
      setData({})
      let res = await fetch(`https://store-api-backend-steel.vercel.app/api/store/collections`);
      if (!res.ok)
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };

      let dataCollection = await res.json();
      setIsPending(false);
      setData(dataCollection.data);
      setError({ err: false });
    } catch (err) {
      setIsPending(true);
      setData(null);
      setError(err);
    }
  };
  

  return { data, isPending, error, getData };
};
