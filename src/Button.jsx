export const Button = ({ buttonText, className, clickAction, data }) => {
  return (
    <div className=" flex justify-center items-center">
      <button className={className} onClick={() => clickAction(data)}>
        {buttonText}
      </button>
    </div>
  );
};
