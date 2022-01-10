
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import style from '../style.module.css'

export const Spinner = () => {
  return (
    <div className={style.spiner }>
      	<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
     
    </div>
  );
};


//<Bars type="Bars" color="#00BFFF" height={80} width={80} />
//	<Circles type="Circles" color="#00BFFF" height={80} width={80}/>type="Audio" color="#00BFFF" height={80} width={80} />
//	<ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />