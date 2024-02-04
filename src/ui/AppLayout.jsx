import { Link, Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  //   console.log(isLoading);

  return (
    <div className="font-be-vietnam-pro text-gray-very-light">
      {isLoading && <Loader />}
      <header className="bg-black">
        <div className="header-bg-image grid items-center justify-center">
          <Link to="/">
            <img
              src="/images/Logo.svg"
              className="relative -top-3 max-w-32"
              alt=""
            />
          </Link>
        </div>
      </header>
      <main className="flex justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
