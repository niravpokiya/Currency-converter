import { useEffect, useState } from 'react';

function useConvert(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;
    
    const lowerCurrency = currency.toLowerCase();

    fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${lowerCurrency}.json`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.error("Fetch error:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useConvert;
