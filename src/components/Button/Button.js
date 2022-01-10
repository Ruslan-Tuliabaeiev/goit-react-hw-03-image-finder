import PropTypes from 'prop-types';
import style from '../style.module.css';




export const Button = ({nextPage, children, loading}) => {
    return (
        <>
      
        {loading &&<div> {children}</div> }

        <button className={style.Button} type="button" onClick={nextPage} disabled={loading}>
           {loading && <span>Loading...</span>}
            {!loading && <span>Load More</span>}
        </button>
   </> )
}

Button.propTypes = {
    nextPage: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}
