import "./App.css";
import { useState } from "react";
import blur from "./assets/blur-image.svg";
import dots from "./assets/dots.svg";
import search from "./assets/search-icon.svg";
import githubMark from "./assets/github-mark-white.svg";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// filepath: c:\Users\lfagu\Documents\GitHub\github-search-profile\src\App.jsx
import { getAPI } from "./script";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    setLoading(true);
    setError(null);
    setUserData(null);
    try {
      const data = await getAPI(user);
      setTimeout(() => {
        setUserData(data);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        setError(err.message);
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <>
      <main class="shrink-0 overflow-hidden">
        <img
          className="rounded-full w-[400px] absolute -right-20 -top-10 blur-2xl  -z-1"
          src={blur}
          alt="blur effect"
        />
        <img
          className="w-[200px] h-[200px] absolute left-5 -top-5 -z-1"
          src={dots}
          alt=""
        />
        <div className=" w-screen-xl  flex flex-col  items-center bg-black  p-5 mx-5 gap-10">
          <div className="flex justify-center items-center gap-5">
            <img
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[60px] lg:h-[60px]"
              src={githubMark}
              alt="github logo Mark"
            />
            <h1 className="text-white font-bold sm:text-2xl md:text-6xl">
              Perfil GitHub
            </h1>
          </div>
          <form className="w-full max-w-2xl">
            <label
              form="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="search"
                id="user"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                onClick={handleSearch}
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <img className="w-4 h-4" src={search} alt="search icon" />
              </button>
            </div>
          </form>
          <div className="card flex justify-center items-center">
            {loading && (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}
            {error && <Alert severity="error">{error}</Alert>}
            {userData && (
              <div className="flex flex-col md:flex-row gap-5 items-center bg-[#D9D9D9] p-5 rounded-2xl shadow-lg">
                <img
                  className=" border-2 border-blue-700 rounded-full w-[100px] h-[100px] md:w-[200px] md:h-[200px] "
                  src={userData.avatar_url}
                  alt="User Avatar"
                />
                <div className="text flex flex-col justify-between items-start ms-5 gap-5">
                  <h2 className="text-blue-700 text-2xl font-bold ">
                    {userData.name || "Nome não disponível"}
                  </h2>
                  <p className="text-black text-left ">
                    {userData.bio || "Bio não disponível"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <img
          className="rounded-full w-[400px] absolute -left-80 -bottom-30 blur-2xl -z-1"
          src={blur}
          alt="blur effect"
        />
      </main>
    </>
  );
}

export default App;
