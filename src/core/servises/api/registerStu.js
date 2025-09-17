import Http from "../interceptor/interceptor";

const MainUrl=process.env.REACT_APP_PUBLIC_PATH;

const RegisterStu = async(obj) => {
    try {
        const result = await Http.post(`${MainUrl}auth/register`,obj);
        return result.data;
      } catch (error) {
        return [];
      }
}
 
export {RegisterStu} ;