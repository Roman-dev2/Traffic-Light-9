import PropTypes from 'prop-types'; 
import './StatsBar.css';


const StatsBar = ({ toggleOrientation }) => {
  return (
    <div className="statsBar">
      <button onClick={toggleOrientation}>Змінити положення</button>
    </div>
  );
};


StatsBar.propTypes = {
  toggleOrientation: PropTypes.func.isRequired, 
};

export default StatsBar;
