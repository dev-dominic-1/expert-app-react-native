interface RandomUserPhoto {
  SMALL: string;
  MEDIUM: string;
  LARGE: string;
}

interface ExpertFees {
  followUpQuestion: number;
}

export default class Expert {
  id!: number;
  name!: string;
  bio!: string;
  photoUrl!: RandomUserPhoto;
  fees!: ExpertFees;

  constructor(
    id: number,
    name: string,
    bio: string,
    photoUrl: RandomUserPhoto,
    fees: ExpertFees,
  ) {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.photoUrl = photoUrl;
    this.fees = fees;
  }
}
