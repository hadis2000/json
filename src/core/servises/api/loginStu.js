import Http from "../interceptor/interceptor";

const MainUrl=process.env.REACT_APP_PUBLIC_PATH;

const LoginStu = async(obj) => {
    try {
        const result = await Http.post(`${MainUrl}auth/login`,obj);
        return result.data;
      } catch (error) {
        return false;
      }
}
 
export {LoginStu} ;