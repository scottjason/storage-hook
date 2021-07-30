import React, { useEffect, useState } from 'react';
import { makeLoyaltyReq } from './utils/loyaltyUtil';
import { useLoyaltyStorage } from './hooks/useLocalStorage';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loyaltyAcct, setLoyaltyAcct] = useLoyaltyStorage(null);

  useEffect(() => {
    const getLoyaltyStatus = async () => {
      if (!loyaltyAcct) {
        console.log('** Not found in storage or expired, making request **');
        const response = await makeLoyaltyReq();
        setLoyaltyAcct(response);
      } else {
        console.log('** Found in storage and not expired, not making request **');
        setIsLoaded(true);
      }
    };
    getLoyaltyStatus();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <div>
      {!isLoaded && <p>Fetching</p>}
      {isLoaded &&
        loyaltyAcct.data.map(imgUrl => {
          return <img key={imgUrl} src={imgUrl} alt='img' />;
        })}
    </div>
  );
}

export default App;
