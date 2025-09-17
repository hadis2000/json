import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { setItem } from "../../core/servises/storage/storage";
import { GetEmpById } from "../../core/servises/api/getEmpById";
import { useEffect, useContext } from "react";
import { IsLogged } from "../../core/servises/context/IsLogged";

const AdminAuth = () => {
  const params = useParams();
  const navigate = useNavigate();
  const isLog = useContext(IsLogged);
  var decoded = jwt_decode(params.token);

  setItem("token", params.token);

  const getEmp = async () => {
    const result = await GetEmpById(decoded._id);
    if (result) {
      setItem("user", JSON.stringify(result));
      isLog.HandleStu(result);
      isLog.chageLogged(true);
      navigate("/");
    }
  };

  useEffect(() => {
    getEmp();
  }, []);
};

export default AdminAuth;
