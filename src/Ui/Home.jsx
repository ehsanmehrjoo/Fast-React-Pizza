import { useSelector } from "react-redux";
import CreateUser from "../features/users/CreateUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "./Button";

function Home() {
  const username = useSelector(state => state.user.username)
  const navigate = useNavigate();
  // useEffect(() => {
  //   // وقتی صفحه لود می‌شود، مقدار username از Redux یا localStorage بارگذاری می‌شود
  //   if (userName) setUsername(userName);
  // }, [userName]);
  return (
    <div className="my-10  text-center sm:my-16">
      <h1 className=' text-xl font-semibold  mb-8 md:text-3xl '>
        The best pizza.
        <br />
        <span className="text-yellow-500">
          
        Straight out of the oven, straight to you.
        </span>
      </h1>

    {username === '' ? <CreateUser  /> : <Button type="primary" to='/menu'>
            Continue ordering, {username}
          </Button>}
    </div>
  );
}

export default Home;
