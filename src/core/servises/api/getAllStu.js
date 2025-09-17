import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const GetAllStu = async () => {
  try {
    // const config = {
    //   headers: {
    //     "x-auth-token":
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgxMjE2MTZiZWZjZDNmODQzOTcwODQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI2Mjk4ODV9.RYwyhkF3_nJpFv7O2Wy9lT0TpKRxcC80TCy-M9rnlXA",
    //   },
    // };
    // let config;
    // config.headers["x-auth-token"] =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgxMjE2MTZiZWZjZDNmODQzOTcwODQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI2Mjk4ODV9.RYwyhkF3_nJpFv7O2Wy9lT0TpKRxcC80TCy-M9rnlXA";
    const config = {
      headers: {
        "x-auth-token": `
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzUxOWUyZWExNzk5YTU0MTFhNDgyNTMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Njg3ODU3NDR9.y07bzEweqWA3fQVFjVmF8jeKKa4fWnErRew7qNUwenA
        `,
      },
    };
    const result = await Http.get(`${MainUrl}student/getall`, config.headers);
    return result.data.result;
  } catch (error) {
    return error;
  }
};

export { GetAllStu };
