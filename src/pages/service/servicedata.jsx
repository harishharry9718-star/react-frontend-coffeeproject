import { FaCoffee, FaTruck, FaAward, FaTable } from 'react-icons/fa';
import ser1 from '../../Assets/service-1.jpg';
import ser2 from '../../Assets/service-2.jpg';
import ser3 from '../../Assets/service-3.jpg';
import ser4 from '../../Assets/service-4.jpg';

const ServiceData = [

    {
        src: ser1,
        icon: <FaTruck style={{ color: " rgba(44, 11, 11, 0.863)" }} />,
        title: 'Fastest Door Delivery',
        text: 'Enjoy the convenience of prompt doorstep delivery, Ensuring your coffee cravings are met with speed and precision.'
    },
    {
        src: ser2,
        icon: <FaCoffee style={{ color: "rgba(44, 11, 11, 0.863)" }} />,
        title: 'Fresh Coffee Beans',
        text: 'Our commitment to quality ensures every cup is a rich flavours and aromatic delight. Elevate your coffee experience with us',
    },
    {
        src: ser3,
        icon: <FaAward style={{ color: "rgba(44, 11, 11, 0.863)" }} />,
        title: 'Best Quality Coffee',
        text: ' We meticulosly select, roast, and brew to deliver a taste that transcends ensuring every sip is an embodiment of excellence.',
    },
    {
        src: ser4,
        icon: <FaTable style={{ color: "rgba(44, 11, 11, 0.863)" }} />,
        title: 'Online Table Booking',
        text: 'Elevate your experience with ease by reserving table. Book now to ensure your seat in the warmth of our welcoming ambiance.',
    },


];

export default ServiceData;

