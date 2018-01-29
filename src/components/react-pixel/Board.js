import React from 'react';

import Xel from './Xel';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.attrs = {
      className: 'board',
      onTouchMove: (e) => {
        const touch = e.changedTouches[0];
        const elm = document.elementFromPoint(touch.clientX, touch.clientY);
        if (elm) {
          const xel = this.refs[elm.id];
          if (xel) {
            xel.updateMouseEntered();
          }
        }
      },
    };
  }

  render() {
    const board = this._makeBoard();
    return <div {...this.attrs}>{board}</div>;
  }

  _makeBoard() {
    if (this.props.seed) {
      return this.props.seed.map((row, rowIndex) => {
        const xels = row.map((col, colIndex) => {
          const id = `r${rowIndex}-c${colIndex}`;
          return <Xel key={id}
            ref={id}
            id={id}
            debug={this.props.debug}
            data={col}
            onCallbacks={this.props.onCallbacks}
          />;
        });
        return (
          <div key={`r${rowIndex}`} className="row">
            {xels}
          </div>
        );
      });
    }
    const cols = [...Array(this.props.w).keys()];
    const rows = [...Array(this.props.h).keys()];

    return rows.map((r) => {
      const xels = cols.map(c => <Xel key={`r${r}-c${c}`}
        onCallbacks={this.props.onCallbacks}
      />);
      return (
        <div key={`r${r}`} className="row">
          {xels}
        </div>
      );
    });
  }
}

export default Board;
