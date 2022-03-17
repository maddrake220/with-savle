import OneBlue from "public/layout/ic-number.svg";
import Check from "public/layout/ic-package-check.svg";

function One({ next, Width }) {
  return (
    <div className="one">
      {!next ? <OneBlue width={Width} /> : <Check width={Width} />}
    </div>
  );
}

export default One;
