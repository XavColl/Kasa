import Db from '../assets/db.json';

export const getLodgingFromId = async (req) => {
    const output = Db.find(item => item.id === req.params.id);
    if(!output) {
        return false;
    }
    return output;
}