import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import homell from '../images/oceanleftlarge.png';
import homerl from '../images/oceanrightlarge.png';

function PageHome() {

    return (
        <div className='pagehome-wrapper'>
            <div className='pagehome-image-container' >
                <Link to={'/about'}>
                    <motion.img className='pagehome-left-img'
                        src={homell} 
                        alt="A small boat exploring the arctic ocean left part image" />
                </Link>
                <Link to={'/work'}>
                    <motion.img className='pagehome-right-img'
                        src={homerl} 
                        alt="A small boat exploring the arctic ocean right part image"/> 
                </Link>
            </div>
        </div>
    )
}

export default PageHome
