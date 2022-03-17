import Check from "public/layout/ic-package-check.svg";
import ThreeBlue from "public/layout/ic-three-blue.svg";
import ThreeGrey from "public/layout/ic-three-grey.svg";

function Three({ Width, result, done }) {
  return (
    <div className="three">
      {!done ? (
        !result ? (
          <ThreeGrey width={Width} />
        ) : (
          <ThreeBlue width={Width} />
        )
      ) : (
        <Check width={Width} />
      )}
    </div>
  );
}

export default Three;
