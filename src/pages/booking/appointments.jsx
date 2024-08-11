import { useState } from 'react';
import { useCloseModal } from '@/hooks';
import { Container, DoctorCard, AppointmentModal } from '@/components';
import { StyledHeader, DoctorSection } from '@/styles/appointments.styled';
import { IoSearchOutline, IoFilter } from 'react-icons/io5';
import { dermatologists } from '@/constants';

const Appointments = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState({});

  function toggleModal(id) {
    setSelectedDoctor(dermatologists.find((doc) => doc.id === id));
    setModalIsOpen((prev) => !prev);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  useCloseModal(closeModal);
  return (
    <Container>
      <StyledHeader>
        <h4>Appointments</h4>
        <p>
          <span>Consultation(Specialist) &gt; </span>
          <span>Doctor List</span>
        </p>

        <div className='input-box'>
          <div className='search-box'>
            <input
              type='text'
              name='search'
              placeholder='Search doctors name'
            />
            <IoSearchOutline size={21} />
          </div>

          <button className='filter fx-center'>
            <IoFilter size={21} />
            <span>Filter</span>
          </button>
        </div>
      </StyledHeader>

      <DoctorSection>
        {dermatologists.map((doctor) => (
          <DoctorCard key={doctor.id} {...doctor} toggleModal={toggleModal} />
        ))}
      </DoctorSection>
      {modalIsOpen && (
        <AppointmentModal
          onCloseModal={closeModal}
          selectedDoctor={selectedDoctor}
        />
      )}
    </Container>
  );
};

export default Appointments;
