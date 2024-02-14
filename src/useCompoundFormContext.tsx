import { createContext, useContext } from "react";

type CompoundFormContextType = {
  isFocus: boolean;
  setIsFocus: (isFocus: boolean) => void;
};

const CompoundFormContext = createContext<CompoundFormContextType | null>(null);

export const useCompoundFormContext = () => {
  const context = useContext(CompoundFormContext);
  if (!context) {
    throw new Error("CompoundForm 컴포넌트만 사용 가능합니다.");
  }
  return context;
};

export default CompoundFormContext;
