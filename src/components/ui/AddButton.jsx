import "./AddButton.css";

const AddButton = ({ addFunction, removeFunction }) => {
  return (
    <div className="ButtonsContainer">
      <button
        type="submit"
        className="add"
        onClick={(e) => {
          e.preventDefault();
          addFunction();
        }}
      >
        Add
      </button>
    </div>
  );
};

export { AddButton };

//Remove button

//  <button
//    type="button"
//    className="remove"
//    onClick={(e) => {
//      e.preventDefault();
//      removeFunction();
//    }}
//  >
//    Remove
//  </button>;
