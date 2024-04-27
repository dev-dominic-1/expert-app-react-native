import React from "react";
import Call from "../models/Call";
import CallDetails from "../models/CallDetails";
import Expert from "../models/Expert";
import { calls } from "../models/tempData/CallData";
import { callDetails } from "../models/tempData/CallDetailsData";
import { experts } from "../models/tempData/ExpertData";
import Dinero from "dinero.js";

const TAX_RATE = 0.07;

interface AppFees {
  followUpQuestion: number;
}

export interface AppState {
  showModalUnderlay?: boolean;
  calls?: { [key: number]: Call };
  callDetails?: { [key: number]: CallDetails };
  experts?: { [key: number]: Expert };
  fees: AppFees;
  functions: {
    combineFees: (...fees: number[]) => string;
    taxSubtotal: (subtotal: string) => [string, string];
  };
  updateState: (newState: Partial<AppState>) => void;
}

export const defaultAppState: AppState = {
  showModalUnderlay: false,
  calls: calls,
  callDetails: callDetails,
  experts: experts,
  fees: {
    followUpQuestion: 0.5,
  },
  functions: {
    combineFees: (...fees: number[]) => {
      let result = Dinero({ amount: 0 });
      fees.forEach((f) => {
        const temp = Dinero({ amount: parseInt(`${f * 100}`) });
        result = result.add(temp);
      });
      return result.toFormat("$0,0.00");
    },
    taxSubtotal: (subtotal: string) => {
      let dineroSub = Dinero({
        // Chop the `$`
        amount: parseInt(`${parseFloat(subtotal.substring(1)) * 100}`),
      });
      const taxAmount = dineroSub.multiply(TAX_RATE, "HALF_UP");
      return [
        taxAmount.toFormat("$0,0.00"),
        taxAmount.add(dineroSub).toFormat("$0,0.00"),
      ];
    },
  },
  updateState: (newState?: Partial<AppState>) => {},
};

const GlobalContext = React.createContext(defaultAppState);
export default GlobalContext;
