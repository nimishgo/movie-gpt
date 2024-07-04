import { onAuthStateChanged, signOut } from "firebase/auth";
import iconImg from "../assets/icon.png";
import avatar from "../assets/Netflix-avatar.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleShowSearch, toggleShowVideo } from "../utils/userConfig";

const Header = ({ setShowSignOut, showSignOut }) => {
  const dispatch = useDispatch();
  const user = useSelector((appStore) => appStore.user);
  const showGpt = useSelector((store) => store.userConfig.showSearch);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setShowSignOut(!showSignOut);
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  const toggleSearch = () => {
    dispatch(toggleShowSearch());
    dispatch(toggleShowVideo());
  };
  return (
    <div className="absolute z-50 px-8 py-2 bg-gradient-to-b from-neutral-950 w-full flex justify-between">
      <img src={iconImg} alt="logo" className="w-4/12 md:w-44" />
      <div className="flex justify-between items-center ">
        {showSignOut && (
          <>
            <div className="flex flex-col items-center m-4">
              <img
                src={user?.photoURL || avatar}
                alt="userIcon"
                className="w-16 h-16 mx-4 border-solid border-2 border-rose-500  rounded-lg"
              />
              <p className="font-bold text-xl text-white">
                {user?.displayName}
              </p>
            </div>
            <button
              className="bg-purple-400 px-4 py-2 rounded-lg text-white font-bold mx-4"
              onClick={toggleSearch}
            >
              {showGpt ? "Home" : "Gpt Search"}
            </button>
            <button
              className="px-4 py-2 text-neutral-50 font-bold rounded-lg bg-rose-500"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
