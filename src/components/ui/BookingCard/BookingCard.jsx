import Link from 'next/link';
import { Card } from './styles';
import { Calendar, World } from '@/components';

const BookingCard = ({
  id,
  title,
  caption,
  description,
  image,
  toggleModal,
}) => {
  return (
    <>
      {id === 'book' ? (
        <Link href='/booking/appointments'>
          <Card $id={id} $image={image}>
            <div className='info-box'>
              <h5>{title}</h5>
              <div className='info-details'>
                <div className='svg-box'>
                  <Calendar />
                </div>
                <div>
                  <p className='caption'>{caption}</p>
                  <p className='description'>{description}</p>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ) : (
        <Card $id={id} $image={image} onClick={toggleModal}>
          <div className='info-box'>
            <h5>{title}</h5>
            <div className='info-details'>
              <div className='svg-box'>
                <World />
              </div>
              <div>
                <p className='caption'>{caption}</p>
                <p className='description'>{description}</p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default BookingCard;
