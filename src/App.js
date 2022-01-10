

import { Component  } from 'react';


import {Searchbar} from './components/Searchbar/Searchbar';
//import SerchFotoInfo from './components/SerchFotoInfo';


import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Button } from './components/Button/Button';

import {Spinner } from './components/Loader/Loader';
import { Modal } from './components/Modal/Modal';
import mapper from './components/maper/maper';

export  class App extends Component {
  state = {
    serchFoto:  '',

    error: null,
   
    status: '',
    loading: false ,
    result: [],
    page: 1,
    shouModal: false,
    elemModal: [],
  }
  
  handleFormSubmit = (serch) => {
    this.setState({serchFoto: serch, status: 'panding', page: 1, result: []});

  }

  componentDidUpdate(prevProps, prevState) {
const { serchFoto, page} = this.state;

  if(prevState.serchFoto !== serchFoto || prevState.page !== page)  {

  fetch(`https://pixabay.com/api/?q=${serchFoto}&page=${page}&key=24011003-4a9e2bf62a6e3281e228c94d5&image_type=photo&orientation=horizontal&per_page=12`)
 
.then(response => response.json())
  

.then(({hits}) => {
  if(hits.length === 0 ) {
    // alert('Erorr')
    this.setState({status: 'rejected'})
    return
  }
  this.setState(prevState => 
    ({result: [...prevState.result, ...mapper(hits) ], status: 'resollved',
 loading: false,

    }))})

// .catch(error => this.setState({error, status: 'rejected'}))

}
}
nextPage = () => {
 this.setState(prevState => ({
   page: prevState.page + 1,
   loading: true
 }))
}
closeModal = () => {
   this.setState(prevState => ({
     shouModal: !prevState.shouModal, 
    
   }))

}
clickOnImage = event => {
  const src = event.target.getAttribute('data-url')
const alt = event.target.getAttribute('alt')
console.log( src, alt)
this.setState({
  shouModal: true ,  
  elemModal: {src, alt}
})
}



    render() {
//serchFoto,

      const { loading, status, result, elemModal, shouModal } = this.state
const bth = !(result.length < 12) 

        return( 
   <div>
 <Searchbar onSubmit={this.handleFormSubmit}/>

 {status === 'resollved' && <>{ <ImageGallery
  result={result}
  clickImage={this.clickOnImage}
  /> }
 {bth && <Button nextPage={this.nextPage} loading={loading}  > 

 </Button>}


 </>}

   {status === 'panding' && <div><h2>loading...<Spinner /></h2> </div>}

      {status === 'idle' && <div>введите название поиска</div> }   

     {status === 'rejected' && <div><h1>Error</h1></div>}

 {shouModal && (<Modal alt={elemModal.alt } src={elemModal.src} onClose={this.closeModal}/>) } 
        </div>
      )
    }
  };
  

export default App;







