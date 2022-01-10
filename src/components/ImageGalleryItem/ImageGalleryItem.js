

import PropTypes from 'prop-types';

import style from '../style.module.css';



export const ImageGalleryItem = ({Image, tag, largeImageURL, imageClick}) => {
return ( 
    
    <li className={style.ImageGalleryItem }>   <img src={Image} data-url={largeImageURL} onClick={imageClick} alt={tag } className={style.ImageGalleryItemimage}/></li>  

)


}

ImageGalleryItem.propTypes = {
    result:PropTypes.shape({
           Image: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
        }),
      imageClick: PropTypes.func.isRequired,
    }    
    

 
   
    

//className="gallery-item"

// {/* <li class="gallery-item">
//   <img src="" alt="" />
// </li> */}