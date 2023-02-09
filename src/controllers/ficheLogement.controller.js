import Db from "../assets/db.json";

/** function to get one lodging according to the id, used in useLoaderParams*/

export const getLodgingFromId = async (req) => {
  const output = Db.find((item) => item.id === req.params.id);
  if (!output) {
    return false;
  }
  return output;
};
