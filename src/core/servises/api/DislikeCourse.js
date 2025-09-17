import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const DisLikeCourse = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}course/dislike`, obj);
    return result.data;
  } catch (error) {
    return false;
  }
};

export { DisLikeCourse };
