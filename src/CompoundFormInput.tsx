import { useCompoundFormContext } from "./useCompoundFormContext";

type CompoundFormProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function CompoundFormInput({ onChange }: CompoundFormProps) {
  const { setIsFocus } = useCompoundFormContext();

  const onClickFocus = () => {
    setIsFocus(true);
  };
  const onClickOutFocus = () => {
    setIsFocus(false);
  };
  return (
    <input
      onChange={onChange}
      onFocus={onClickFocus}
      onBlur={onClickOutFocus}
    />
  );
}

export function CompoundFormLabel({ title }: { title: string }) {
  return <div>{title}</div>;
}
