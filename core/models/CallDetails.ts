export default class CallDetails {
  id!: number;
  callId!: number;
  date!: string;
  time!: string;
  questionTitle?: string;
  question?: string;
  rating?: number;
  review?: string;
  comment?: string;

  constructor(
    id: number,
    callId: number,
    date: string,
    time: string,
    questionTitle?: string,
    question?: string,
    rating?: number,
    review?: string,
    comment?: string,
  ) {
    this.id = id;
    this.callId = callId;
    this.date = date;
    this.time = time;
    this.questionTitle = questionTitle;
    this.question = question;
    this.rating = rating;
    this.review = review;
    this.comment = comment;
  }
}
