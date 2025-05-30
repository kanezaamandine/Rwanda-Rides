import './contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LineChart } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import Logbar from './Logbar';

function Contacting(){

    return(
        <>
       
        <div className='bby'>
                <div style ={{ position:'relative', top:'-10px', width:'100%'}}>
        <Logbar />
      </div>

            
            <p className='cont'> Have questions or need assistance? We're here to help!</p>
            <div className='con'> <p className='conif'> Contact information </p> <p>you can find us</p> <div className='circle-10'> <Mail className='shield'/> </div> <div className='circle-11'> <Phone className='shield'/> </div> <div className='circle-12'><MapPin className='shield'/> </div></div>
            <div className='small-con'> <p className='conif'> Help Resources</p>   <div className='con-in'> <div className='circle-15'> ?</div> <p className='faq'>FAQ & Help center</p> </div><div className='con-ins'> <MessageCircle className='circle-17'/>  </div>
            <div className='big-con'> <p className='conifs'> Send us  message</p> </div> </div>
            
        </div>
        
        </>
    );
}

export default Contacting;