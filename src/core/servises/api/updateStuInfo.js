import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UpdateStuInfo = async (id, obj) => {
  try {
    const result = await Http.put(`${MainUrl}student/${id}`, obj);
    return result.data;
  } catch (error) {
    return false;
  }
};

export { UpdateStuInfo };
