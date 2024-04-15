import { Home } from "../../views/home/Home";
import { Profile } from "../../views/profile/Profile";
import MyCalls from "../../views/all-calls/MyCalls";

export const navScreens = [
  { name: "Home", component: Home },
  { name: "Profile", component: Profile },
  { name: "My Calls", component: MyCalls, showNav: true, includeTitle: true },
];
