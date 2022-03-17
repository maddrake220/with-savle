import Check from "public/layout/ic-package-check.svg";
import TwoBlue from "public/layout/ic-two-blue.svg";
import TwoGrey from "public/layout/ic-two-grey.svg";

function Two({ Width, result, next }) {
  return (
    <div className="two">
      {!result ? (
        !next ? (
          <TwoGrey width={Width} />
        ) : (
          <TwoBlue width={Width} />
        )
      ) : (
        <Check width={Width} />
      )}
    </div>
  );
}

export default Two;
