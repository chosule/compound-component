import { useState } from "react";
import CompoundFormInput, { CompoundFormLabel } from "./CompoundFormInput";
import CompoundFormContext from "./useCompoundFormContext";

export default function CompoundForm({ children }: any) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <CompoundFormContext.Provider value={{ isFocus, setIsFocus }}>
      <div>{children}</div>
    </CompoundFormContext.Provider>
  );
}

CompoundForm.Input = CompoundFormInput;
CompoundForm.Label = CompoundFormLabel;
