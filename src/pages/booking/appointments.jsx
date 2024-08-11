import { useState } from 'react';
import { useCloseModal } from '@/hooks';
import { Container, DoctorCard, AppointmentModal } from '@/components';
import { StyledHeader, DoctorSection } from '@/styles/appointments.styled';
import { IoSearchOutline, IoFilter } from 'react-icons/io5';
import { dermatologists } from '@/constants';

const Appointments = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState({});

  const filteredDoctors = dermatologists.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              onChange={(e) => setSearchQuery(e.target.value)}
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
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} toggleModal={toggleModal} />
          ))
        ) : (
          <h3>
            Sorry, we couldn't find any dermatologists matching your search.
            Please try again with different criteria or check back later.
          </h3>
        )}
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
