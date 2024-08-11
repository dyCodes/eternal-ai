import { Card } from './styles';

const DoctorCard = ({
  id,
  name,
  image,
  rate,
  experience,
  ratings,
  toggleModal,
}) => {
  return (
    <Card $image={image} onClick={() => toggleModal(id)} tabIndex={0}>
      <div className='image-banner' />
      <div className='doctor-info'>
        <p className='rate'>{rate}</p>
        <p className='name'>{name}</p>
        <div>
          <p>
            <span>{experience} Years Experience</span>
            <span className='bar'>|</span>
            <span>Ratings {ratings}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;
