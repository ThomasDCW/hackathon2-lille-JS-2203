import FormLogin from "@components/FormLogin";
import Header from "@components/HeaderLogin";
import login from "@assets/login/login.png";
import SLogin from "./style";

export default function Login() {
  return (
    <SLogin>
      <Header />
      <div className="loginContainer">
        <img src={login} className="loginPicture" alt="loginPicture" />
        <FormLogin />
      </div>
    </SLogin>
  );
}
