/* eslint-disable react/prop-types */

const ShareButtons = ({name}) => {
    return (
        <button className='btn btn-sm bg-black text-white w-full hover:bg-gray-900'>{name}</button>
    );
};

export default ShareButtons;