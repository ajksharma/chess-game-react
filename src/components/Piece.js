import React, { Component } from 'react';

class Piece extends Component {
  handleClick = () => {
    const {
      foundSquare,
      movePiece,
      piece,
      selectPiece,
      selected,
      selectedPiece,
    } = this.props;
    if (!foundSquare.available) {
      selectPiece(piece);
    } else {
      movePiece(selectedPiece, foundSquare.row, foundSquare.column, true);
    }
  }

  render() {
    const {
      left,
      piece,
      selected,
      top,
      width,
    } = this.props;
  
    const style = {
      border: selected ? '3px solid red' : 'none',
      left,
      top,
      height: width,
      width,
    }
  
    return (
      <div
        className="Piece"
        onClick={this.handleClick}
        style={style}
      >
        <img
          className="chess-piece"
          src={piece.icon}
          alt={piece.label}
        />
      </div>
    )
  }
}

export default Piece;