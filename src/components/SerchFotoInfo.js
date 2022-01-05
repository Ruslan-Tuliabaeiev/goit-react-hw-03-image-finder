// import { Component  } from 'react';
// import { ImageGallery } from './ImageGallery/ImageGallery';

// import {Loader } from './Loader/Loader';




// export class SerchFotoInfo extends Component {
//     state = {
//         fotoSerch: null,
     
//         error: null,
//        status: 'idle'
//     } 

// componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.serchFoto;
// const nextName = this.props.serchFoto;
//   if(prevName !== nextName)  {
//   console.log('prevName:', prevName )
//   console.log('nextName:', nextName)
//   console.log('имя изминилось name');
// this.setState({status: 'panding'});
//   fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=24011003-4a9e2bf62a6e3281e228c94d5&image_type=photo&orientation=horizontal&per_page=12`)
// .then(response => {
//     if (response.ok) {
//         return response.json()}
//     return Promise.reject(
//         new Error (`nothing found for this serch ${nextName}`))
// })

// .then(console.log)
// .then(fotoSerch => this.setState({fotoSerch, status: 'resollved'}))
// .catch(error => this.setState({error, status: 'rejected'}))

// }
// }



// render() {

//     const {serchFoto, error, status } = this.state

// if (status === 'idle') {
//     return <div>введите название поиска</div>
// }
// if (status === 'panding') {
//     return <div><h2>loading... </h2> <Loader/></div>
// }
// if (status === 'rejected') {
//     return <div><h1>{error.message}</h1></div>
// }
//  //resollved.length
// if (status === 'resollved') {
//     return <div>
//         <ImageGallery serchFoto={serchFoto}/>
//         </div>
// }
 

//     return ( 
//         <div>

//             </div>
//     )
// }
// }



// export default SerchFotoInfo;

// ${nextName}
// componentDidMount() {   /////const API_KEY = '24011003-4a9e2bf62a6e3281e228c94d5'{24011003-4a9e2bf62a6e3281e228c94d5};//24011003
//   this.setState({loading: true});
// fetch('https://image_type=photo&orientation=horizontal&q=serchFoto&page=page&per_page=12&key=24011003-4a9e2bf62a6e3281e228c94d5')
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12


//
    // {/* <h1>SerchFotoInfo</h1>
    //         {error &&  <h1>{error.message}</h1>}
    //         {loading && <Loader/> }
     
    //         {!this.props.serchFoto && <div>enter search name</div>}
    //         {fotoSerch && <div>{fotoSerch}</div>}
           
    //          */}