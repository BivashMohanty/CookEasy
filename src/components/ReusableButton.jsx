const ReusableButton = ({ text, onClick }) => {
    return (
      <button className="btn" onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default ReusableButton;
  