import { BackDrop, StyledModal } from './styles';
import { CiStar } from 'react-icons/ci';
import { FaPeopleGroup, FaPersonWalking } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { LineBar, ReportUploadBox } from '@/components';
import { appointmentHelpText } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';

const AppointmentModal = ({ onCloseModal, selectedDoctor }) => {
  const [documentFile, setDocumentFile] = useState('');
  const handleBookAppointment = () => {
    if (!documentFile) {
      toast.error('Please upload document for appointment');
      return;
    }
    toast.success('Booked successfully');
    onCloseModal();
  };

  const handleUpload = (file) => {
    setDocumentFile(file.name);
  };
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

          <ReportUploadBox
            modalType='appointment'
            helpText={appointmentHelpText}
            onChange={(file) => handleUpload(file)}
            documentFile={documentFile}
          />

          <button className='confirm' onClick={handleBookAppointment}>
            Book Appointment
          </button>
        </div>
      </StyledModal>
    </>
  );
};

export default AppointmentModal;
