import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const SendComment = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}comments/send`, obj);
    return result.data.message;
  } catch (error) {
    return false;
  }
};

export { SendComment };
