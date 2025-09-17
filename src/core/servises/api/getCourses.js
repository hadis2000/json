import Http from "../interceptor/interceptor";

const MainUrl=process.env.REACT_APP_PUBLIC_PATH;

const GetCourses = async() => {
    try {
        const result = await Http.get(`${MainUrl}course/getall`);
        return result.data.result;
      } catch (error) {
        return [];
      }
}
 
export {GetCourses} ;