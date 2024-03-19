import PropTypes from 'prop-types';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-1 items-center'><IoCheckmarkDoneCircleSharp className='text-yellow-300'></IoCheckmarkDoneCircleSharp>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;