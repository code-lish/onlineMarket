import { Rating as Rat } from "react-simple-star-rating";

const Rating = () => {
  return (
    <Rat
      initialValue={4}
      size={25}
      allowHover={false}
      /* Available Props */
    />
  );
};

export default Rating;
