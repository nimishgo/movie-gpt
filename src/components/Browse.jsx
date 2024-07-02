import { useState } from "react";
import Header from "./Header";

const Browse = () => {
  const [showSignOut, setShowSignOut] = useState(true);
  return (
    <div>
      <Header showSignOut={showSignOut} setShowSignOut={setShowSignOut} />
      Browse
    </div>
  );
};
export default Browse;
