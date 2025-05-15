export const Button = ({ buttonText, className, clickAction, imdbID }) => {
  return (
    <div className=" flex justify-center items-center">
      <button className={className} onClick={() => clickAction(imdbID)}>
        {buttonText}
      </button>
    </div>
  );
};
