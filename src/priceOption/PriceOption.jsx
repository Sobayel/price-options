import PropTypes from 'prop-types';
import Feature from '../Components/Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-600 p-3 rounded-xl text-white text-center'>
            <h2 className='pt-4'>
                <span className='text-3xl font-bold'>{price}</span>
            </h2>
            <h4 className='text-2xl my-6 font-semibold'>{name}</h4>
            <div className='pl-5'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='mt-5 bg-yellow-300 text-black hover:bg-gray-300 w-full my-5 font-bold p-2 rounded-xl'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;