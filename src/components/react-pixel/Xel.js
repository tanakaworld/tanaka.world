import React from 'react';
import ReactDom from 'react-dom';

class Xel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMouseEntered: false
        };
        this.attrs = {
            id: this.props.id,
            className: "xel",
            onMouseEnter: () => {
                this.updateMouseEntered();
            }
        };

        if (props.debug) {
            this.attrs.className += " debug";
        }
    }

    render() {
        const data = this.props.data;

        if (data.static) {
            this._setColor(data.static);
        } else {
            this._setColor(this.state.isMouseEntered ? data.after : data.before);
        }

        return (
            <div {...this.attrs} ></div>
        );
    }

    updateMouseEntered() {
        if (!this.state.isMouseEntered) {
            this.setState({isMouseEntered: true});
        }
    }

    _setColor(color, $dom = this) {
        $dom.attrs['style'] = {
            'background': color
        };
    }
}

export default Xel;
