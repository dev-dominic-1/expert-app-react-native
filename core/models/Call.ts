export default class Call {
  title!: string;
  timestamp!: string;
  hostName!: string;
  topic?: string;
  adImageUrl?: any;

  constructor(
    title: string,
    timestamp: string,
    hostName: string,
    topic?: string,
    adImageUrl?: any,
  ) {
    this.title = title;
    this.timestamp = timestamp;
    this.hostName = hostName;
    this.topic = topic;
    this.adImageUrl = adImageUrl;
  }
}
