import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const DeleteStuOfCourse = async (obj) => {
  try {
    const data = { courseId: obj.courseId };
    const result = await Http.post(
      `${MainUrl}course/removeStudentFromCourse/${obj.userId}`,
      data
    );
    return result.data;
  } catch (error) {
    return false;
  }
};

export { DeleteStuOfCourse };
