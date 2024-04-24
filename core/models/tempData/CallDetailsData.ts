import CallDetails from "../CallDetails";

export const callDetails: { [key: number]: CallDetails } = {
  1: new CallDetails(
    1,
    1,
    "2023-08-16",
    "10:30",
    "Tactics for Finding Cheap Flights",
    "Hello! I’m planing a trip to Morocco next year, but when I was looking at tickets, " +
      "they were out of my price range. Can you let me know what techniques you use to find " +
      "cheaper flights? ",
    5,
    "Peter was super helpful with helping me find websites to use to find cheap flights! " +
      "He also gave me tips on how to make travel cheaper that I had never heard of! ",
  ),
  2: new CallDetails(
    2,
    2,
    "2023-09-29",
    "14:00",
    "Audience Engagement",
    "Hey Arthur, as someone experienced in editing TikToks, could you offer some advice for creating " +
      "engaging and polished content? Your insights would be really helpful.",
    4,
  ),
  3: new CallDetails(
    3,
    3,
    "2023-09-24",
    "13:30",
    "Budgeting Tips in Excel",
    "Hey Jessica, as someone skilled in Excel, could you provide some tips for effectively using it to budget? " +
      "Your expertise would be much appreciated!",
    5,
  ),
  4: new CallDetails(
    4,
    4,
    "2024-10-20",
    "14:00",
    "Accuracy of Translation",
    "Hi Lisa, as a professional Georgian language translator, could you share some tips for maintaining accuracy and fluency in translations? " +
      "Your insights would be greatly appreciated.",
  ),
  5: new CallDetails(
    5,
    5,
    "2024-10-27",
    "17:00",
    "3D Printing Efficiency",
    "Hey Frank, being knowledgeable about 3D printing, could you share some tips for optimizing " +
      "the process? Your insights would be invaluable!",
  ),
  6: new CallDetails(6, 6, "2024-10-18", "16:00"),
  7: new CallDetails(7, 7, "2024-10-28", "15:30"),
};

/**
 * Dish up a record for update. Async ready for API integration
 * @param {number} id Select a record to update by ID
 * @param {() => CallDetails} callback Handle changes in a callback
 */
export async function dishCallDetails(
  id: number,
  callback: (el: CallDetails) => CallDetails,
): Promise<void | string> {
  return new Promise((resolve, reject) => {
    let details = callDetails[id];
    try {
      callDetails[id] = callback(details);
      resolve();
    } catch (e: any) {
      reject(e);
    }
  });
}
