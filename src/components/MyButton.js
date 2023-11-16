const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    // button의 className을 동적으로 변환
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

//기본 typeProp은 default로 지정
MyButton.defaultProps = {
  type: "dafult",
};
export default MyButton;
