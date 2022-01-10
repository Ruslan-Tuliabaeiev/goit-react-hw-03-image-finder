import { Component  } from 'react';
import PropTypes from 'prop-types';

import { createPortal } from "react-dom";
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root')


export class Modal extends Component {
    static propTypes = {
onClose: PropTypes.func.isRequired,
src: PropTypes.string.isRequired,
alt: PropTypes.string.isRequired,

    }
    componentDidMount(){window.addEventListener('keydown', this.closeModal);} 
    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModal);
      }
closeModal = event => {
    if(event.code === 'Escape') {
        this.props.onClose()
    }
}
handleClick = event => {
    if(event.currentTarget === event.target ) {
        this.props.onClose()
    }
}

render(){
const {src, alt } = this.props
  return createPortal (
<div onClick={this.handleClick} className={style.Overlay}>
  <div className={style.Modal}>
    <img src={src} alt={alt} />
  </div>

</div>,
 modalRoot,

  )
}
}



