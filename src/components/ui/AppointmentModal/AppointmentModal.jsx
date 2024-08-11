import { BackDrop, StyledModal } from './styles';
import { CiStar } from 'react-icons/ci';
import { FaPeopleGroup, FaPersonWalking } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { LineBar } from '@/components';
import Link from 'next/link';

const AppointmentModal = ({ onCloseModal, selectedDoctor }) => {
  function handleBookAppointment() {
    toast.success('Booked successfully');
    onCloseModal();
  }
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
            <LineBar className='line-bar' />
            <div>
              <p>
                <FaPeopleGroup className='patients' />
                <span>{selectedDoctor.total_patients}</span>
              </p>
              <p className='label'>Total Patients</p>
            </div>

            <LineBar className='line-bar' />
            <div>
              <p>
                <CiStar className='reviews' />
                <span>{selectedDoctor.total_reviews}</span>
              </p>
              <p className='label'>Reviews</p>
            </div>
          </div>
        </div>

        <div className='user-bio'>
          <nav>
            <ul>
              <li>About</li>
              <li>Schedules</li>
              <li>Experience</li>
              <li>Reviews</li>
            </ul>
          </nav>

          <div className='about'>{selectedDoctor.about}</div>

          <div className='upload'>
            <p>
              Add your desired gemini generated dermatopathology report, the
              specialist will reach out to you within 24hrs upon the review of
              your analysis.
            </p>
          </div>

          <button className='confirm' onClick={handleBookAppointment}>
            Book Appointment
          </button>
        </div>
      </StyledModal>
    </>
  );
};

export default AppointmentModal;
