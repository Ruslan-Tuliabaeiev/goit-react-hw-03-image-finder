import  { Component } from 'react';
import style from '../style.module.css';

export  class Searchbar extends Component {
state = {
  serchFoto:  '',
}

   handleNameChange = event => {
     this.setState({ serchFoto: event.currentTarget.value.toLowerCase() })
   }

   handleSubmit = event => {
     event.preventDefault();     
if(this.state.serchFoto.trim() === ''){
  alert('Введите название поиска')
  return;
}
     this.props.onSubmit(this.state.serchFoto);
     this.setState({ serchFoto: ''})
   }


   



render() {
  return (

<header className={style.Searchbar} >
  <form className={style.SearchForm}  onSubmit={this.handleSubmit}>
    <button className={style.SearchFormbutton} type="submit" >
      <span className={style.SearchFormbuttonlabel} >Search</span> 
    </button>

    <input className={style.SearchForminput}
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos" 
      name="serchFoto"
      value={this.state.serchFoto}
      onChange={this.handleNameChange}

    />
  </form>
</header>
)
}

    //className={style.SearchFormbutton}
}

export default Searchbar;

