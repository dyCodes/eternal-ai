import { useState } from 'react';
import { useCloseModal } from '@/hooks';
import { CaseStudyModal, Container } from '@/components';
import { BookingCard } from '@/components';
import { bookingData } from '@/constants';
import { Section } from '@/styles/bookings.styled';

const Booking = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen((prev) => !prev);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  useCloseModal(closeModal);

  return (
    <Container>
      <Section>
        {bookingData.map((booking) => (
          <BookingCard
            key={booking.id}
            {...booking}
            toggleModal={toggleModal}
          />
        ))}
      </Section>
      {modalIsOpen && <CaseStudyModal onCloseModal={closeModal} />}
    </Container>
  );
};

export default Booking;
