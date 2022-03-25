import {GoMarkGithub} from 'react-icons/go';
import {GrLinkedin} from 'react-icons/gr';
import {AiOutlineMail} from 'react-icons/ai';
function Contact() {
    return (
        <div>
            <div className='contact'>
                <a href="mailto:linus.luo@gmail.com"><AiOutlineMail size={32}/></a>
                <a href="https://github.com/wirelesslifestyle"><GoMarkGithub size={32}/></a>
                <a href="https://www.linkedin.com/in/linus-luo-b162a412"><GrLinkedin size={32}/></a>
                
            </div>
        </div>
    )
}

export default Contact
