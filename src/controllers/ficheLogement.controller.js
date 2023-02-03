import Db from '../assets/db.json';

export const getLodgingFromId = (id) => {
    const output = Db.find(item => item.id === id);
    if(!output) {
        return false;
    }
    return output;
}