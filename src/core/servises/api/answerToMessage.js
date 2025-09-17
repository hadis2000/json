import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const AnswerComment = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}comments/answer`, obj);
    return result.data;
  } catch (error) {
    return false;
  }
};

export { AnswerComment };
