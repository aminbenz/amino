import { useState, useEffect, useCallback } from "react";
import axios from "../api/axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const fetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios(url, options);
        setData(res.data);
      } catch (err) {
        const data = err.response ? err.response.data : "Server error";
        setError(data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, options, url]);

  return [{ data, error, isLoading }, fetch];
};

export default useFetch;