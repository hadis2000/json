import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const AddStuToCourse = async (obj) => {
  try {
    const data = { courseId: obj.courseId };
    const result = await Http.post(
      `${MainUrl}course/addStudentToCourse/${obj.userId}`,
      data
    );
    return result.data;
  } catch (error) {
    return false;
  }
};

export { AddStuToCourse };
