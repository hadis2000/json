import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const ForgetPassStu = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}forgetpassword`, obj);
    return result.data;
  } catch (error) {
    return false;
  }
};

export { ForgetPassStu };
