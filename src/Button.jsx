export const Button = ({ buttonText, className }) => {
  return (
    <div className=" flex justify-center items-center">
      <button className={className}>{buttonText}</button>
    </div>
  );
};
