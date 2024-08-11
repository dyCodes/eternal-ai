import { useState } from 'react';
import { BackDrop, StyledModal } from './styles';
import { toast } from 'react-toastify';
import { FaCheck } from 'react-icons/fa';

const CaseStudyModal = ({ onCloseModal }) => {
  const [rememberUser, setRememberUser] = useState(false);

  function handleConfirmation() {
    toast.success('Booked successfully');
    onCloseModal();
  }
  return (
    <>
      <BackDrop onClick={onCloseModal} />
      <StyledModal>
        <div className='banner' />
        <div className='content'>
          <h3>
            Thank you for applying to be part of our global campaign as a case
            study for medical students
          </h3>

          <p className='description'>
            We match your case with medical students whose preferences align
            with your profile, ensuring a tailored analysis. Once matched,
            students take 7 to 21 days to thoroughly review and study your case.
            If you choose to opt in, they will reach out to you with their
            insights, either through a call or email.
          </p>

          <div className='upload'>
            <p>
              Add your desired gemini generated dermatopathology report, Your
              participation is entirely voluntary, and your privacy is always
              protected.
            </p>
          </div>

          <div className='checkbox'>
            <button
              onClick={() => setRememberUser((prev) => !prev)}
              type='button'
            >
              {rememberUser && <FaCheck />}
            </button>
            <span>
              Opt in to have your email shared for further communication with
              your assigned med student
            </span>
          </div>

          <button className='confirm' onClick={handleConfirmation}>
            Confirm
          </button>
        </div>
      </StyledModal>
    </>
  );
};

export default CaseStudyModal;
