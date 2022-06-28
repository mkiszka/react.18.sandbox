import React from 'react';
import PropTypes from 'prop-types';

class ProgressArc extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    draw = () => {
        //https://developer.mozilla.org/pl/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
        const { size, percent, color, trackRemaining } = this.props;

        let precentOfCircle;
        if( trackRemaining ) {
            precentOfCircle = (100 - percent) / 100;
        } else {
            precentOfCircle = percent / 100;
        }

        /** @type {CanvasRenderingContext2D} */
        const context = this.canvas.current.getContext("2d");

        context.clearRect(0, 0, size, size);
        context.fillStyle = color;
        context.strokeStyle = color;

        context.save();
        context.beginPath();
        
        console.log(precentOfCircle);
        context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2 * precentOfCircle, false);        
        context.lineTo(size/2, size / 2);        
        context.lineTo(size, size/2);
        context.fill();
        
        context.stroke();
        context.restore();

    }
    componentDidMount() {
        this.draw();
    }

    render() {
        const { trackRemaining, className, size } = this.props;
        return (
            <canvas ref={this.canvas} width={size} height={size} className={className} />
        )
    }
}

//min, max, 
function validateNumberRange(min, max) {
    return (prop, propName, componentName) => {
        const val = prop[propName];
        if (!(val >= min && val <= max)) {
            return new Error(`${propName} in ${componentName} is not within [${min},${max}]`);
        }
    }
}

ProgressArc.defaultProps = {
    percent: 0,
    trackRemaining: false,
    color: 'red',
    className: "",
    size: 100
};

ProgressArc.propTypes = {
    percent: validateNumberRange(0, 100),
    trackRemaining: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf(['red', 'green', 'blue'])
};

export default ProgressArc;