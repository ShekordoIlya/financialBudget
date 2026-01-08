import { useSelector } from "react-redux";

const Auth = () => {
  const { name, userName, password } = useSelector((state: any) => state.Ilya);

  console.log(name, userName, password);

  return <div>Login</div>;
};

export default Auth;
