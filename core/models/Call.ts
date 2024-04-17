import CallDetails from "./CallDetails";
import { callDetails } from "./tempData/CallDetailsData";
import { calls } from "./tempData/CallData";
import Expert from "./Expert";
import { experts } from "./tempData/ExpertData";

export default class Call {
  id!: number;
  expertId!: number;
  title!: string;
  adImageUrl?: any;
  callDetails?: CallDetails;
  expert?: Expert;

  constructor(id: number, expertId: number, title: string, adImageUrl?: any) {
    this.id = id;
    this.expertId = expertId;
    this.title = title;
    this.adImageUrl = adImageUrl;
  }

  static getCall = (id?: number): Call | Call[] => {
    if (!!id) {
      let call = calls[id];
      console.log("CALL DETAILS", callDetails, id);
      call.callDetails = Object.values(callDetails).find(
        (cd) => cd.callId === id,
      );
      call.expert = experts[call.expertId];
      return call;
    }
    return Object.values(calls)?.reduce((acc: Call[], r: Call): Call[] => {
      r.callDetails = Object.values(callDetails).find(
        (cd) => cd.callId === r.id,
      );
      r.expert = experts[r.expertId];
      acc.push(r);
      return acc;
    }, []);
  };
}
