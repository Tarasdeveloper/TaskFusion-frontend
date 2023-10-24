import sprite from '../../assets/sprite.svg';

const SvgRatingStar = (props) => (
  <svg {...props}>
    <use href={`${sprite}#starDeactive`}></use>
  </svg>
);
export default SvgRatingStar;
