import Expert from "../Expert";

export const experts: { [key: number]: Expert } = {
  1: new Expert(
    1,
    "Peter Wendt",
    "World Traveler, Content Creator",
    {
      SMALL: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
      MEDIUM: "https://randomuser.me/api/portraits/med/men/62.jpg",
      LARGE: "https://randomuser.me/api/portraits/men/62.jpg",
    },
    { followUpQuestion: 2 },
  ),
  2: new Expert(
    2,
    "Lisa Milas",
    "Professional Translator",
    {
      SMALL: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
      MEDIUM: "https://randomuser.me/api/portraits/med/women/90.jpg",
      LARGE: "https://randomuser.me/api/portraits/women/90.jpg",
    },
    { followUpQuestion: 1 },
  ),
  3: new Expert(
    3,
    "Frank Herb",
    "3D Printing Enthusiast",
    {
      SMALL: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
      MEDIUM: "https://randomuser.me/api/portraits/med/men/3.jpg",
      LARGE: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    { followUpQuestion: 1 },
  ),
  4: new Expert(
    4,
    "Arthur Spellman",
    "Content Creator, Video Editor",
    {
      SMALL: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
      MEDIUM: "https://randomuser.me/api/portraits/med/men/34.jpg",
      LARGE: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    { followUpQuestion: 1 },
  ),
  5: new Expert(
    5,
    "Jessica Edison",
    "Financial Accountant, Entrepreneur",
    {
      SMALL: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
      MEDIUM: "https://randomuser.me/api/portraits/med/women/2.jpg",
      LARGE: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    { followUpQuestion: 1 },
  ),
  6: new Expert(
    6,
    "Rachel Adams",
    "Marketing Professional",
    {
      SMALL: "https://randomuser.me/api/portraits/thumb/women/42.jpg",
      MEDIUM: "https://randomuser.me/api/portraits/med/women/42.jpg",
      LARGE: "https://randomuser.me/api/portraits/women/42.jpg",
    },
    { followUpQuestion: 1 },
  ),
  7: new Expert(
    7,
    "Dominic Hiland",
    "Full Stack Developer, Consultant",
    {
      SMALL: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
      MEDIUM: "https://randomuser.me/api/portraits/med/men/9.jpg",
      LARGE: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    { followUpQuestion: 1 },
  ),
};
