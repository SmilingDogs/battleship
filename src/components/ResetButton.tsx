type ResetProps = {
  reset: () => void;
}

export const ResetButton = ({ reset }: ResetProps) => {
  return (
    <button type="button" className="btn" onClick={reset}>
      Reset
    </button>
  );
};
