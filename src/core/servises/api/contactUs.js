import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const ContactUs = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}contactUs`, obj);
    return result.data.message[0].message;
  } catch (error) {
    return false;
  }
};

export { ContactUs };
