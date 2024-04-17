import Call from "../Call";

export const calls: { [key: number]: Call } = {
  1: new Call(1, 1, "Finding Cheap Flights"),
  2: new Call(2, 4, "Editing TikToks"),
  3: new Call(3, 5, "Using Excel to Budget"),
  4: new Call(4, 2, "Translating Georgian Idioms"),
  5: new Call(5, 3, "3D Printing Efficiency"),
  6: new Call(
    6,
    6,
    "Marketing Q&A",
    require("../../../assets/calls/img_Marketing_Group_Call.png"),
  ),
  7: new Call(
    7,
    7,
    "Python Animations",
    require("../../../assets/calls/img_Python_Group_Call.png"),
  ),
};

export const upcomingCalls: Call[] = [
  Call.getCall(4) as Call,
  Call.getCall(5) as Call,
];

export const pastCalls: Call[] = [
  Call.getCall(1) as Call,
  Call.getCall(2) as Call,
  Call.getCall(3) as Call,
];

export const upcomingGroupCalls: Call[] = [
  Call.getCall(6) as Call,
  Call.getCall(7) as Call,
];
