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
      <p className="hook">
        <span>Partagez</span> vos idées,<span>Consultez</span> les projets,
        <span>co-créez</span>
      </p>
    </SLogin>
  );
}
