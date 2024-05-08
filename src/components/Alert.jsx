const Alert = ({ type, text }) => {
  return (
    <div
      className={`absolute top-10 left-0 right-0 flex justify-center items-center`}
    >
      <div
        className={`${
          type === "error" ? "bg-red-500" : "bg-green-500"
        } py-2 px-4 text-white rounded-full flex flex-row gap-3 items-center`}
      >
        <div
          className={`${
            type === "error" ? "bg-red-800" : "bg-green-800"
          } text-white py-1 px-3 rounded-full`}
        >
          {type === "error" ? "Error" : "Success"}
        </div>
        {text}
      </div>
    </div>
  );
};

export default Alert;
