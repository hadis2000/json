import Http from "../interceptor/interceptor";

const MainUrl=process.env.REACT_APP_PUBLIC_PATH;

const GetCoursesById = async(id) => {
    try {
        const result = await Http.get(`${MainUrl}course/${id}`);
        return result.data.result;
      } catch (error) {
        return [];
      }
}
 
export {GetCoursesById} ;