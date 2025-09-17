import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const GetStuById = async (id) => {
  try {
    const result = await Http.get(`${MainUrl}student/${id}`);
    return result.data.result;
  } catch (error) {
    return [];
  }
};

export { GetStuById };
