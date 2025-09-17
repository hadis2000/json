import Http from "../interceptor/interceptor";

const MainUrl=process.env.REACT_APP_PUBLIC_PATH;

const GetAllComment = async() => {
    try {
        const result = await Http.get(`${MainUrl}comments/`);
        return result.data;
      } catch (error) {
        return [];
      }
}
 
export {GetAllComment} ;