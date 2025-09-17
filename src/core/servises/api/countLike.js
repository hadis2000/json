import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const CountLike = async (id) => {
  try {
    const result = await Http.get(`${MainUrl}course/likeCount/${id}`);
    return result.data.result;
  } catch (error) {
    return [];
  }
};

export { CountLike };
