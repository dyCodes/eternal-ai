import { useState } from 'react';
import { CaseStudyModal, Container } from '@/components';
import { BookingCard } from '@/components';
import { bookingData } from '@/constants';
import { Section } from '@/styles/bookings.styled';

const Booking = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Container>
      <Section>
        {bookingData.map((booking) => (
          <BookingCard
            key={booking.id}
            {...booking}
            setModalIsOpen={setModalIsOpen}
          />
        ))}
        {modalIsOpen && <CaseStudyModal setModalIsOpen={setModalIsOpen} />}
      </Section>
    </Container>
  );
};

export default Booking;
