import Http from "../interceptor/interceptor";

const MainUrl=process.env.REACT_APP_PUBLIC_PATH;

const GetNewsById = async(id) => {
    try {
        const result = await Http.get(`${MainUrl}news/${id}`);
        return result.data.result;
      } catch (error) {
        return [];
      }
}
 
export {GetNewsById} ;