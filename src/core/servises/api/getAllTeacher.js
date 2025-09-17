import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const GetAllTeacher = async () => {
  try {
    const result = await Http.get(`${MainUrl}employee/getallteachers`);
    return result.data.result;
  } catch (error) {
    return [];
  }
};

export { GetAllTeacher };
