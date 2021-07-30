import Cookie from 'js-cookie';
import axios from 'axios';

const REQ_URL = 'https://dog.ceo/api/breed/terrier/images';

export const getLoyaltyKey = () => {
  const APP_NAME = 'prfui-';
  const FEAUTRE = 'loyalty-ca-';
  const cam = Cookie.get('cam');
  const key = `${APP_NAME}${FEAUTRE}${cam}`;
  return key;
};

export const makeLoyaltyReq = async () => {
  try {
    const response = await axios.get(REQ_URL);
    const storage = {
      data: response.data.message,
      createdAt: Date.now(),
    };
    return storage;
  } catch (err) {
    return err;
  }
};
