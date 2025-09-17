import { createContext, useState } from "react";
import { getItem } from "../storage/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const IsLogged = createContext();

const LoggeddInCheckedProvider = ({ children }) => {
  const LoggedIn = getItem("token");
  const [isLogged, setIsLogged] = useState(LoggedIn ? true : false);

  const isStu = getItem("user");
  const [student, setStudent] = useState(
    isStu ? JSON.parse(getItem("user")) : {}
  );

  const HandleChangeLogged = (sit) => {
    setIsLogged(sit);
  };

  const HandleStu = (stu) => {
    setStudent(stu);
  };

  const HandleToast = (text) => {
    toast.success(text);
  };
  return (
    <>
      <IsLogged.Provider
        value={{
          currentLog: isLogged,
          chageLogged: HandleChangeLogged,
          HandleToast,
          studentData: student,
          HandleStu,
        }}
      >
        {children}
      </IsLogged.Provider>
      <ToastContainer style={{ fontFamily: "estedadM" }} />
    </>
  );
};

export default LoggeddInCheckedProvider;
