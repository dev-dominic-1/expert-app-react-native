import moment from "moment";

export default class MomentWrapper {
  static dateFormat = (date: string) => moment(date).format("dddd, MMMM Do");
  static dateFormatShort = (date: string) => moment(date).format("MMMM Do");
  static dateFormatCompact = (date: string) => moment(date).format("M/D/YY");

  static timeFormat = (time: string) =>
    moment(`1999-01-01 ${time}`).format("h:mm A");
}
