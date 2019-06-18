import React from 'react';

import './GoatCorral';
import Goat from '../Goat/Goat';


class GoatCorral extends React.Component{
  render(){
    const { goats } = this.props;
    const makeGoats = goats.map(goat => (
     
      <Goat key={goat.id} goat={goat} />
    ));
    return (
      <div className="GoatCorral d-flex flex-wrap">
        { makeGoats }
      </div>
    );
  }

}

export default GoatCorral;