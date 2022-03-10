import css from "styled-jsx/css";
const style = css`
  .toggle {
    width: 29px;
    height: 18px;
    border-radius: 27px;
    background: #d6d8dc;
    position: relative;
    cursor: pointer;
  }
  .toggle::before {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0px 0.753204px 0.753204px rgba(0, 0, 0, 0.1);
    background: #fff;
  }
  @media (min-width: 1200px) {
    .toggle {
      width: 32px;
      height: 20px;
      border-radius: 30px;
    }
    .toggle::before {
      width: 16px;
      height: 16px;
      top: 2px;
      left: 2px;
    }
  }
`;
const Toggle = ({ onClick, hidden }) => {
  return (
    <div className="toggle" onClick={onClick}>
      <style jsx>{style}</style>
      <style jsx>{`
        .toggle {
          background: ${!hidden && "#3178ff"};
        }
        .toggle::before {
          left: ${!hidden && "13px"};
        }
      `}</style>
    </div>
  );
};

export default Toggle;
