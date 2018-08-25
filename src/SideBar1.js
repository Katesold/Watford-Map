import React, { Component } from 'react';



class SideBar extends Component {
  
  state = {
    query: ''
  }

  refreshQuery = (query) => {
    this.setState({ query })
    this.props.updateList(this.filterCafes(this.props.cafes, query))
  }

  
  filterCafes = (cafes, query) => 
  cafes.filter(cafe => cafe.name.toLowerCase().includes(query.toLowerCase()));

 //cafes displayed in SideBar
  render () {
    const cafePlaces = this.props.cafes;
    const typedQuery = this.state.query;
    

    const listCafes = this.filterCafes(cafePlaces, typedQuery).map((cafe, idx) => {
      return (
        <li className= "cafe"
           key={cafe.id}
           tabIndex={0}
           onClick={() => {this.props.handleInfoWindow(idx)}}
           onKeyPress={() => {this.props.handleInfoWindow(idx)}}
           role="button"
           aria-label={cafe.name}>
          
          {cafe.name}
          
        </li>
      )
    })
    
    return (
      <aside>
        <div className="sideBar">
          <div className="locations-list">
            <input type="text" placeholder="Search for a place" value={this.state.query} onChange={(e) => this.refreshQuery(e.target.value)}/>
            <ul aria-labelledby="Cafe list">
                {listCafes}
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default SideBar;
