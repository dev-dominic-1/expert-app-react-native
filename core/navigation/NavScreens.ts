import { Home } from "../../views/home/Home";
import { Profile } from "../../views/profile/Profile";
import MyCalls from "../../views/my-calls/MyCalls";
import CallDetails from "../../views/call-details/CallDetails";
import EditReview from "../../views/edit-review/EditReview";
import AddReview from "../../views/add-review/AddReview";
import FollowUp from "../../views/follow-up/FollowUp";

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
  {
    name: "Edit Review",
    component: EditReview,
    showNav: true,
    includeTitle: true,
  },
  {
    name: "Add Review",
    component: AddReview,
    showNav: true,
    includeTitle: true,
  },
  {
    name: "Follow Up",
    component: FollowUp,
    showNav: true,
    includeTitle: true,
  },
];
