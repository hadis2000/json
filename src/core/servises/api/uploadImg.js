import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UploadImg = async (img) => {
  try {
    let config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const result = await Http.post(`${MainUrl}upload/image`, img, config);
    return result.data.result;
  } catch (error) {
    return false;
  }
};

export { UploadImg };
