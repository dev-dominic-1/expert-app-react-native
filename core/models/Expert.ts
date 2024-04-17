interface RandomUserPhoto {
  SMALL: string;
  MEDIUM: string;
  LARGE: string;
}

export default class Expert {
  id!: number;
  name!: string;
  bio!: string;
  photoUrl!: RandomUserPhoto;

  constructor(
    id: number,
    name: string,
    bio: string,
    photoUrl: RandomUserPhoto,
  ) {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.photoUrl = photoUrl;
  }
}
