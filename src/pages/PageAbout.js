import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import homell from '../images/oceanleftlarge.png';
import homerl from '../images/oceanrightlarge.png';
import aboutll from '../images/oceanoriginalleftnarrow.png';
import aboutrl from '../images/oceanoriginalrightnarrow.png';
import crafter from '../images/crafter.JPG';
import bike from '../images/bike.JPG';
import rainbow from '../images/rainbow.JPG';


const transition = {duration:2, ease:[0.6,0.01,-0.05,0.9]}

function PageAbout() {
    return (    
        <motion.div
            initial='initial'
            animate='animate'
            exit='out' 
            className='pageabout-wrapper'>

            <div className='pageabout-opening'>
                <motion.img
                    initial={{opacity:1}}
                    animate={{
                        rotateY:75,
                        opacity:0,
                        transition:{delay:0.2,...transition},
                    }}                 
                className='pageabout-lefthome-img'  
                    src={homell} 
                    alt="A small boat exploring the arctic ocean left part image" />
                <motion.img 
                    initial={{opacity:1}}
                    animate={{
                        rotateY:75,
                        opacity:0,
                        transition:{delay:0.2,...transition},
                    }}                
                    className='pageabout-righthome-img'
                    src={homerl} 
                    alt="A small boat exploring the arctic ocean right part image"/> 
            </div>                
            <motion.div 
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    transition:{delay:0.5,...transition},
                }}
                >
                <img className='pageabout-left-img'  
                    src={aboutll} 
                    alt="A small boat exploring the arctic ocean left part image" />
                <img className='pageabout-right-img'
                    src={aboutrl} 
                    alt="A small boat exploring the arctic ocean right part image"/>
            </motion.div>

            <div className='pageabout-container' >
                <section className='pageabout-section'>
                    <motion.img
                        initial={{opacity:0, y:window.innerHeight < 700 ? 1700 : 2000 }} 
                        animate={{
                            opacity:1,
                            transition:{delay:0.5,...transition},
                            y:0,
                        }}                
                        className='pageabout-section-img' src={crafter} alt="A middle age worker sitting in his cottage with a cup of coffee" />
                    <motion.p
                        initial={{opacity:0, y:window.innerHeight < 700 ? 1700 : 2000 }} 
                        animate={{
                            opacity:1,
                            transition:{delay:3,...transition},
                            y:0,
                        }} 
                        >I am a detail oriented thinker under any environment. The field of web development is perfect place for me to thrive. </motion.p>
                </section>

                <section className='pageabout-section'>
                    <motion.img
                        initial={{opacity:0, y:window.innerHeight < 700 ? 1700 : 2000 }} 
                        animate={{
                            opacity:1,
                            transition:{delay:6,...transition},
                            y:0,
                        }}  
                        className='pageabout-section-img' src={rainbow} alt="Two bikes park on the seaside" />
                    <motion.p
                        initial={{opacity:0, y:window.innerHeight < 700 ? 1700 : 2000 }} 
                        animate={{
                            opacity:1,
                            transition:{delay:9,...transition},
                            y:0,
                        }}> 
                        My goal is to write clean, efficient code while utilizing the newest front-end technologies. The completion of BCIT's intensive 6 month Front-End Web Developer program has given me a solid foundation of HTML, CSS/SASS, JavaScript and PHP.
                    </motion.p>
                </section>

                <section className='pageabout-section'>
                    <motion.img
                        initial={{opacity:0, y:window.innerHeight < 700 ? 1700 : 2000 }} 
                        animate={{
                            opacity:1,
                            transition:{delay:12,...transition},
                            y:0,
                        }}  
                        className='pageabout-section-img' src={bike} alt="Two bikes park on the seaside" />
                    <motion.p
                        initial={{opacity:0, y:window.innerHeight < 700 ? 1700 : 2000 }} 
                        animate={{
                            opacity:1,
                            transition:{delay:15,...transition},
                            y:0,
                        }} >
                        When I'm not busy writing code you can find me in my canoe or biking around the city.
                    </motion.p>
                </section>
                <Contact />                            
            </div>    
        </motion.div>
        
    )
}

export default PageAbout
