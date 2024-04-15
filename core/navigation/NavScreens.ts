import { Home } from "../../views/home/Home";
import { Profile } from "../../views/profile/Profile";
import MyCalls from "../../views/my-calls/MyCalls";
import CallDetails from "../../views/call-details/CallDetails";

export const navScreens = [
  { name: "Home", component: Home },
  { name: "Profile", component: Profile },
  { name: "My Calls", component: MyCalls, showNav: true, includeTitle: true },
  {
    name: "Call Details",
    component: CallDetails,
    showNav: true,
    includeTitle: true,
  },
];
