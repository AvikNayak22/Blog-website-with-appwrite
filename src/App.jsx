import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {Outlet} from "react-router-dom";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components/Index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

   return !loading ? (
    <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow flex justify-center bg-[#e1ebf1]">
              {/* Todo: <Outlet/> */}
            </main>
            <Footer />
        </div>
   ) : null;
}

export default App;
