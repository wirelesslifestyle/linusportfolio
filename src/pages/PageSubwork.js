import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import projectInfo from '../data/ProjectInfo';
import {SiGithub,SiInternetexplorer} from 'react-icons/si';

function PageSubwork() {
  const { id } = useParams();
  let singleProject =projectInfo[id];
  
  return (
    <div>
      <img src={singleProject.banner} alt={singleProject.alt} />
      <div className="pagesubwork-wrapper">
        <h1>{singleProject.title}</h1>
        <section>
          <p>{singleProject.overview}</p>
        </section>
        <h2>Development Stack</h2>
        <div className='pagesubwork-tech'>
          <div>
            <p>Language</p> {singleProject.language}
          </div>
          <div>
            <p>Framework</p> {singleProject.technology}
          </div>
        </div>
        <h2>Project Goals</h2>
        <div>
          <p>{singleProject.goals}</p>
        </div>
        <h2>Project Design</h2>
        <div className='pagesubwork-design'>
          <p>{singleProject.design}</p>
          <img src={singleProject.designimg} alt={singleProject.designimgalt} />
        </div>
        <h2>Project Highlights</h2>
        <div>
          <p>{singleProject.highlights}</p>
        </div>
        <h2>Take Away</h2>
        <div>
          <p>{singleProject.takeaway}</p>
        </div>
        <div className='pagesubwork-res'>
          <div>
            <a className='pagesubwork-res-icon' href={singleProject.github}><SiGithub size={50} /> </a>
          </div>
          <a className='pagesubwork-res-icon' href={singleProject.livesite}><SiInternetexplorer size={50} color='blue'/></a>
        </div>
        {/* <div className='pagesubwork-other'>
          <Link to={`/work/${id--}`}>Previous Project</Link>
          <Link to={`/work/${id++}`}>Next Project</Link>
        </div> */}
      </div>
    </div>
  );
}

export default PageSubwork;
