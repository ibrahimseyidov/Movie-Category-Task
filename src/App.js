import React from 'react';
import { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import CategoryList from './components/CategoryList';
import CategoryMovies from './components/CategoryMovies';


class App extends Component {


  state = { categorie: "" }

  getCategorieName = (e) => {
    this.setState({ categorie: e.target.textContent })
  }


  render() {

    return (

      <div className='container d-flex' >

        <div className='row w-100'>
          <div className='col-3'>
            <CategoryList getCategorieFunc={this.getCategorieName} />
          </div>

          <div className='col-9'>
            <CategoryMovies currentCategorie={this.state.categorie} />
          </div>
        </div>


      </div>

    )
  }
}



export default App;
