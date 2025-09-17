import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const ResetPass = async (obj, tokenStu) => {
  try {
    const result = await Http.post(`${MainUrl}resetPassword/${tokenStu}`, obj);
    return result.data;
  } catch (error) {
    return false;
  }
};

export { ResetPass };
