import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const LikeCourse = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}course/like`, obj);
    return result.data;
  } catch (error) {
    return false;
  }
};

export { LikeCourse };
