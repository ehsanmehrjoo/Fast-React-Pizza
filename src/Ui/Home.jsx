import CreateUser from "../features/users/CreateUser";

function Home() {
  return (
    <div className="mt-10 mb-8 text-center">
      <h1 className=' text-xl font-semibold  mb-8 '>
        The best pizza.
        <br />
        <span className="text-yellow-500">
          
        Straight out of the oven, straight to you.
        </span>
      </h1>

    <CreateUser  />
    </div>
  );
}

export default Home;
