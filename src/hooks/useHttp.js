//to send request we two things

import { useCallback, useEffect, useMemo, useState } from 'react';

//1: url 2: config
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(
      resData.message || 'Something went wrong, failed to send request.'
    );
  }
  return resData;
}
export default function useHttp(url, config, intialData) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(intialData);
  //here we have to use useEffect hook to prevent infinite loop.

  const memoizedConfig = useMemo(() => {
    return config;
  }, [JSON.stringify(config)]);
  
  const sendRequest = useCallback(
    async function sendRequest(data) {
      setLoading(true);
      try {
        const resData = await sendHttpRequest(url, {
          ...memoizedConfig,
          body: data,
        });
        setData(resData);
      } catch (error) {
        setError(error.message || 'Something went wrong!');
      }
      setLoading(false);
    },
    [url, memoizedConfig]
  );
  useEffect(() => {
    if (memoizedConfig && memoizedConfig.method === 'GET') sendRequest();
  }, [sendRequest]);

  return { loading, error, data, sendRequest };
}
