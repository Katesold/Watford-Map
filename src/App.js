import React, { Component } from 'react';
import Map from './Map';
import SideBar from './SideBar1.js';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {

  state = {
    cafes: [],
    clickedCafe: {},
    filteredCafe: [],
    menuHidden: true
  }

// get the data for the cafes in Watford and catch any errors from Foursquare and Map
  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/search?ll=51.656489,-0.39032&intent=browse&radius=10000&query=cafe&client_id=XQSXUGIR140AWUVFJJ120S31IPIXQYIO2QJ2ZN2U0ZPLLG4P&client_secret=A0N5P5VI4NG5UQK2GV2M0WU1FYY3KZ0EUYV0YMYZSX5IHHSU&v=20180806')
    .then(response => response.json())
    .then((data) => {
      this.setState({cafes: data.response.venues, filteredCafe: data.response.venues})
    }).catch((error) => {
      alert('An error occurred while trying to fetch data from Foursquare: ' + error)
    })

    window.gm_authFailure = () => {
      alert('An error occurred while trying to load Google Map')
    }
  }


// Update filtered list of venues 
  updateList = (filteredCafe) => {
    this.setState({ filteredCafe })
    /*const sideMenu = document.getElementsByClassName('bm-menu')[0]
    sideMenu.style.display = 'block'*/
  }

  /*makeVisible = () => {
    const sideMenu = document.getElementsByClassName('bm-menu')[0]
    sideMenu.style.display = 'block'
  }*/

  // Show the infowindow when a place is clicked
  handleInfoWindow = (clickedCafe) => {
    this.setState({ clickedPlace: clickedCafe })
    this.setState({menuHidden: false})
    /*this.makeVisible()*/
  }

  render() {
    let viewIndex = 0
    if(this.state.menuHidden) {
      viewIndex = -1
    }


    let visib = {
      display: 'block'
    }
    return (
      <div className="app" role="application">
        <Header />
        <Map
           cafes = {this.state.filteredCafe}
           clickedPlace = {this.state.clickedPlace}
           handleInfoWindow = {this.handleInfoWindow}/>

        <SideBar
           cafes = {this.state.cafes}
           handleInfoWindow = {this.handleInfoWindow}
           updateList = {this.updateList}
           menuHidden = {this.state.menuHidden}
           onClick = {makeVis}/>

      
        <Footer/>
      </div>
    );
  }
}

const vis = document.getElementsByClassName("bm-burger-button");
function makeVis() { 
  vis.addEventListener("click", display)
};


function display() {
    document.getElementsByClassName("filter").style.display = 'block';
}

export default App;
