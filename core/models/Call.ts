export default class Call {
  title!: string;
  timestamp!: string;
  hostName!: string;
  topic?: string;

  constructor(
    title: string,
    timestamp: string,
    hostName: string,
    topic?: string,
  ) {
    this.title = title;
    this.timestamp = timestamp;
    this.hostName = hostName;
    this.topic = topic;
  }
}
