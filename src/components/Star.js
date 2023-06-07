import {FaStar} from 'react-icons/fa';

function Star(props) {
    
  return (
    <>
        <FaStar
        className={`text-7xl cursor-pointer ${props.style}`}
        onClick={props.rateFunction}
        />
    </>
  )
}

export default Star;