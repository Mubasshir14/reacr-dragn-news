import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='space-y-2'>
            <div className='flex justify-center'>
                <img src={logo} alt="" />
            </div>
            <p className='text-2xl text-center'>Journalism Without Fear or Favour</p>
            <p className='text-3xl text-center'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;