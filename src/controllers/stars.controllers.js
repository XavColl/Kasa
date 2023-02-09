import star from "../assets/images/star.svg";
import nostar from "../assets/images/no-star.svg";

/** Function to give the stars to display acording to the rating */

export const displayRating = (rating) => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      arr.push(star);
    } else arr.push(nostar);
  }
  return arr;
};
