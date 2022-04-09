import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAddTask, toggleShow }) => {
/*   const handleClick = () => {
    console.log("Click with handle"); */

  
  return (
    <div className="header">
      {/* <h1>Task Tracker</h1> */}
      <h1>{title}</h1>
      {/* <Button handleClick={handleClick} color="purple" text="Show Add Task Bar" /> */}
      <Button
        color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggleShow={toggleShow}
      />
    </div>
  );
};

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }; //! string değer istediğimizde..

// Header.defaultProps = {
//     title: "Task Tracker",
// }

// title = "Task Default" in props area

export default Header;
