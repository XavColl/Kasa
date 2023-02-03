import Db from '../assets/db.json';

/**
 * Get the array of images to display in carrousel, from id.
 */

export const getPictures = ( id ) => {
    const item = Db.find(lodge => lodge.id === id);
    item.pictures.forEach(img => {
        const image = new Image();
        image.src = img
    })
    return item.pictures;
}