import React, { useEffect } from 'react';
import { makeLoyaltyReq } from './utils/loyaltyUtil';
import { useLoyaltyStorage } from './hooks/useLocalStorage';

function App() {
  const [loyaltyAcct, setLoyaltyAcct] = useLoyaltyStorage(null);

  useEffect(() => {
    const getLoyaltyStatus = async () => {
      if (!loyaltyAcct) {
        const response = await makeLoyaltyReq();
        setLoyaltyAcct(response);
      }
    };
    getLoyaltyStatus();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <div>
      {!loyaltyAcct && <p>Loading</p>}
      {loyaltyAcct &&
        loyaltyAcct.data.map(imgUrl => {
          return <img key={imgUrl} src={imgUrl} alt='img' />;
        })}
    </div>
  );
}

export default App;
