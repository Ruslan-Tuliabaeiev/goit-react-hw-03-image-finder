
import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import style from '../style.module.css';

export const ImageGallery = ({result, clickImage}) => {
    return (
        <ul className={style.ImageGallery}>

 { result.map(({webformatURL, id, tags, largeImageURL}) => (<ImageGalleryItem key={id} imageClick={clickImage} Image={webformatURL} largeImageURL={largeImageURL} tag={tags}/>))}
 
 </ul>

    )
}

ImageGallery.propTypes = {
result: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
    })
).isRequired,
clickImage: PropTypes.func.isRequired,
}



// <img src={`https://image.tmdb.org/t/p/w780${img}`} alt=""/>///className={style.ImageGalleryItem }

// films.map(({title, id, backdrop_path: img }) => ({title, id, img, watched: true,}))

/////////////.hits.map({картинка,tags})=>(<li>< img src="картинка" alt="tags"/></li>)Картинка=webformatURL



// <ul>class="gallery"
// /{contacts.map(({ name, id, number }) => (<li className={style.list} key={id}><ElementContacts name={name} number={number} id={id} func={onDeleteContacts}/></li>) )}
// </ul>
