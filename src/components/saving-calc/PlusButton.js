const PlusButton = ({ id, onClick, children }) => {
  return (
    <button id={id} onClick={onClick}>
      {children}
      <style jsx>{`
        button {
          width: 47px;
          height: 20px;
          background: #eceff2;
          border-radius: 120px;
          text-align: center;
          margin-left: 10px;
          border: none;
          font-weight: 500;
          font-size: 10px;
          color: #a0a1a9;
        }
        p {
          margin: 0;
          font-weight: 500;
          font-size: 10px;
          color: #a0a1a9;
        }
      `}</style>
    </button>
  );
};
export default PlusButton;
