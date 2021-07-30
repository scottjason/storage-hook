import axios from 'axios';
import Cookie from 'js-cookie';

const APP_NAME = 'PRFUI-';
const FEAUTRE = 'LOYALTY-';
const REQ_URL = 'https://dog.ceo/api/breed/terrier/images';

export const getLoyaltyKey = () => {
  const cam = Cookie.get('cam');
  return `${APP_NAME}${FEAUTRE}${cam}`;
};

export const makeLoyaltyReq = async () => {
  try {
    const response = await axios.get(REQ_URL);
    return {
      data: response.data.message,
      createdAt: Date.now(),
    };
  } catch (err) {
    return err;
  }
};
