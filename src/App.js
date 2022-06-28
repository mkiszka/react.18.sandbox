import './App.css';
import React from 'react';
import ProgressArc from './ProgressArc';

class MyPrettyCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.time = 0;
  }

  draw() {
    /** @type {CanvasRenderingContext2D} */
    const ctx = this.canvas.current.getContext("2d");
    let { size, rectanglesCount } = this.props;
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "rgba(0,150,0,0.2)";
    ctx.save();
    ctx.translate(size / 2, size / 2);
 
    const maxRectSize = size / Math.sqrt(2);
    for (let index = 0; index < rectanglesCount; index++) {
      const rectSize = maxRectSize * (index / (rectanglesCount));
      const rectAngle = (index / (rectanglesCount));

      ctx.save();
      ctx.rotate(rectAngle * this.time);
      ctx.translate(-rectSize / 2, -rectSize / 2);
      ctx.fillRect(0, 0, rectSize, rectSize);
      ctx.restore();
    }
    ctx.restore();

  }

  componentDidMount() {
    this.animationRequestedId = window.requestAnimationFrame(this.update);
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationRequestedId);
  }

  update = () => {
    this.time += 0.02;
    this.draw();    
    this.animationRequestedId = window.requestAnimationFrame(this.update);
  }

  render() {
    const { size } = this.props;
    return <canvas ref={this.canvas} width={size} height={size} className={"borderRed"} />
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {reactAmount: 2};
    
  }
  render() {
    const { reactAmount } = this.state;

    return (
      <div className="App App-header">
        <p>
          Kanwasik ;- ]
        </p>
        <MyPrettyCanvas size={300} rectanglesCount={reactAmount} />
        <div style={{ height: "50px" }}>
          <label>Liczba kwadracików:</label>
            <input
              type="number" value={reactAmount} 
              onChange={(event) => {this.setState({ reactAmount: (event.target.value>=0?event.target.value:0) })}}></input>
        </div>
        <ProgressArc className="borderRed" percent={75} color="red" size={100}/>
      </div>
    );
  }
}

export default App;
