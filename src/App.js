

import { Component  } from 'react';


import {Searchbar} from './components/Searchbar/Searchbar';
//import SerchFotoInfo from './components/SerchFotoInfo';

////////
import { ImageGallery } from './components/ImageGallery/ImageGallery';

import {Loader } from './components/Loader/Loader';


export  class App extends Component {
  state = {
    serchFoto:  '',

    // fotoSerch: null,
    error: null,
    status: '',
    
    result: [],
    page: 1,
  }
  
  handleFormSubmit = serchFoto => {
    this.setState({serchFoto});
    console.log(serchFoto)
  }




  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.serchFoto;
const nextName = this.state.serchFoto;
  if(prevName !== nextName)  {
  console.log('prevName:', prevName )
  console.log('nextName:', nextName)
  console.log('имя изминилось name');
this.setState({status: 'panding'});
  fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=24011003-4a9e2bf62a6e3281e228c94d5&image_type=photo&orientation=horizontal&per_page=12`)
  //////////

.then(response => {
    if (response.ok) {
        return response.json()}
    return Promise.reject(
        new Error (`nothing found for this serch ${nextName}`))
})
///////////////

.then(console.log)
.then(fotoSerch => this.setState({fotoSerch, status: 'resollved'}))
.catch(error => this.setState({error, status: 'rejected'}))

}
}






  
    render() {


      const {serchFoto, error, status } = this.state

      if (status === 'idle') {
          return <div>введите название поиска</div>
      }
      if (status === 'panding') {
          return <div><h2>loading... </h2> <Loader/></div>
      }
      if (status === 'rejected') {
          return <div><h1>{error.message}</h1></div>
      }
       //resollved.length
      if (status === 'resollved') {
          return <div>
              <ImageGallery serchFoto={serchFoto}/>
              </div>
      }
       
      


      return(
         
        <div>
  <Searchbar onSubmit={this.handleFormSubmit}/>
  
  
        </div>
      )
    }
  };
  

  ///<SerchFotoInfo serchFoto={this.state.serchFoto}/>



export default App;
/////////////////////////

///////////////////


// export  class App extends Component {
//   state = {
//     serchFoto:  '',
//     page: 1,
//     loading: false ,
//     result: [],
//   }
  
//   handleFormSubmit = serchFoto => {
//     this.setState({serchFoto});
//     console.log(serchFoto)
//   }
  
//     render() {
     
//       return(
         
//         <div>
//   <Searchbar onSubmit={this.handleFormSubmit}/>
//   <SerchFotoInfo serchFoto={this.state.serchFoto}/>
  
//         </div>
//       )
//     }
//   };
  







