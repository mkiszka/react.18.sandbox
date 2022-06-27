import React from 'react';

class ProgressArc extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.time = 0;
    }
    draw() {
        //https://developer.mozilla.org/pl/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
        let { size } = this.props;
        size = 100;
        const rectSize = 50;
        /** @type {CanvasRenderingContext2D} */
        const context = this.canvas.current.getContext("2d");
        context.clearRect(0, 0, size, size);
        context.fillStyle = "rgba(0,150,0,0.2)";
        context.save();
        context.fillRect(0, 0, rectSize, rectSize);
        context.arc(150,150,40,0,90,true);
        context.restore();

    }
    componentDidMount() {
        this.draw();
    }

    render() {
        return (
            <canvas ref={this.canvas} width={300} height={300} className={"borderRed"} />
        )

    }
}

export default ProgressArc;