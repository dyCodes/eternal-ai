import { BackDrop, StyledModal } from './styles';
import { CiStar } from 'react-icons/ci';
import { FaPeopleGroup, FaPersonWalking } from 'react-icons/fa6';

import { LineBar } from '@/components';

const AppointmentModal = ({ onCloseModal, selectedDoctor }) => {
  return (
    <>
      <BackDrop onClick={onCloseModal} />
      <StyledModal $image={selectedDoctor.image}>
        <div className='heading'>
          <div className='image'></div>

          <div className='heading-info'>
            <div>
              <p className='name'>{selectedDoctor.name}</p>
              <p className='ratings'>Ratings {selectedDoctor.ratings}</p>
            </div>

            <p className='rate'>{selectedDoctor.rate}</p>
          </div>
        </div>

        <div className='metric-box'>
          <div className='metrics'>
            <div>
              <p>
                <FaPersonWalking className='experience' />
                <span>{selectedDoctor.experience} Years</span>
              </p>
              <p className='label'>Experience</p>
            </div>
            <LineBar />
            <div>
              <p>
                <FaPeopleGroup className='patients' />
                <span>{selectedDoctor.total_patients}</span>
              </p>
              <p className='label'>Total Patients</p>
            </div>

            <LineBar />
            <div>
              <p>
                <CiStar className='reviews' />
                <span>{selectedDoctor.total_reviews}</span>
              </p>
              <p className='label'>Reviews</p>
            </div>
          </div>
        </div>
      </StyledModal>
    </>
  );
};

export default AppointmentModal;
