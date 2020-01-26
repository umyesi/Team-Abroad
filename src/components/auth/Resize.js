class WindowWidth extends React.Component {
    constructor() {
      super();
      this.state = { 
        height: window.innerHeight, 
        width: window.innerWidth
      };
      this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {
      console.log(this.state.height);
      // Additionally I could have just used an arrow function for the binding `this` to the component...
      window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
      this.setState({
        height: window.innerHeight, 
        width: window.innerWidth
      });
    }
    render() {
      return (
        <h3>
          Window width: {this.state.width} and height: {this.state.height}
        </h3>
      );
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }
  }