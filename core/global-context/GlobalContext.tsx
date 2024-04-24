import React from "react";
import Call from "../models/Call";
import CallDetails from "../models/CallDetails";
import Expert from "../models/Expert";
import { calls } from "../models/tempData/CallData";
import { callDetails } from "../models/tempData/CallDetailsData";
import { experts } from "../models/tempData/ExpertData";

export interface AppState {
  showModalUnderlay?: boolean;
  calls?: { [key: number]: Call };
  callDetails?: { [key: number]: CallDetails };
  experts?: { [key: number]: Expert };
  updateState: (newState: Partial<AppState>) => void;
}

export const defaultAppState: AppState = {
  showModalUnderlay: false,
  calls: calls,
  callDetails: callDetails,
  experts: experts,
  updateState: (newState?: Partial<AppState>) => {},
};

const GlobalContext = React.createContext(defaultAppState);
export default GlobalContext;
