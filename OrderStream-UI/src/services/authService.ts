import api from "./api";

  type LoginResponse = {
    token: string;
  };

export const loginUser = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", {
  username, 
  password,
});
  return response.data
  ;
};
type sendRegResponse={
  isSucess:string;
  msg :string;
};
export const sendRegisterReq= async (fullname:string,email:string,username:string,password:string): Promise<sendRegResponse> =>{   
const resp = await api.post("/auth/register",{
  fullname,email,username,password
});
return resp.data;
}