enum ImageSize {
  LARGE = "L",
  MEDIUM = "M",
  SMALL = "S",
}

async function getImage(size: ImageSize): Promise<string> {
  return new Promise((resolve) => {
    fetch("https://randomuser.me/api/")
      .then(async (res) => {
        const { results } = await res.json();
        const data = results[0].picture;
        switch (size) {
          case ImageSize.SMALL:
            resolve(data.thumbnail);
            break;
          case ImageSize.MEDIUM:
            resolve(data.medium);
            break;
          default:
            resolve(data.large);
        }
      })
      .catch(() => {
        // RandomUser.me is NOT a final solution.
        // Doing nothing is fine for now
      });
  });
}

export default class RandomUserMe {
  static getSmall = async () => getImage(ImageSize.SMALL);
  static getMedium = async () => getImage(ImageSize.MEDIUM);
  static getLarge = async () => getImage(ImageSize.LARGE);
}
