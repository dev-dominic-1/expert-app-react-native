import Call from "../Call";

export const upcomingCalls = [
  new Call(
    "Translating Georgian Idioms",
    "Friday, October 20th, 2:00PM",
    "Lisa Millas",
  ),
  new Call(
    "3D Printing Efficiency",
    "Friday, October 27th, 5:00PM",
    "Frank Herb",
  ),
];

export const pastCalls = [
  new Call("", "August 16th, 10:30AM", "Peter Wendt", "Finding Cheap Flights"),
  new Call("", "September 29th, 2:00PM", "Arthur Spellman", "Editing TikToks"),
  new Call(
    "",
    "September 24th, 1:30PM",
    "Jessica Edison",
    "Using Excel to Budget",
  ),
];

export const upcomingGroupCalls = [
  new Call(
    "Marketing Q&A",
    "10/18/24 4:00PM",
    "Rachel Adams",
    undefined,
    require("../../../assets/calls/img_Marketing_Group_Call.png"),
  ),
  new Call(
    "Python Animations",
    "10/28/24 3:30PM",
    "Dominic Hiland",
    undefined,
    require("../../../assets/calls/img_Python_Group_Call.png"),
  ),
];
