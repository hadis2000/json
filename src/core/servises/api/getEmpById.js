import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const GetEmpById = async (id) => {
  try {
    const result = await Http.get(`${MainUrl}employee/${id}`);
    return result.data.result;
  } catch (error) {
    return [];
  }
};

export { GetEmpById };
