import React, { Component } from 'react';


class Ball extends Component {

    constructor(props) {
        super(props);

        this.state = {
            x: 400,
            y: 300,
            dx: 0,
            dy: 1,
            speed: 3
        }

        this.updatePosition = this.updatePosition.bind(this);
        this.checkCollision = this.checkCollision.bind(this);

        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        var interval = setInterval(this.updatePosition, 10)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    reset() {
        if (this.state.y >= 600) {
            this.setState({
                x: 400,
                y: 300,
                dx: 0,
                dy: 1,
            })
        }
    }

    checkCollision() {
        if (this.props.y_paddle1 <= this.state.y + 17 && this.props.y_paddle1 >= this.state.y && this.state.x >= this.props.x_paddle1 && this.state.x <= this.props.x_paddle1 + 170 && this.props.direction_paddle1 == -1) {
            this.setState({ dy: -1, dx: -1 });
        }
        else if (this.props.y_paddle1 <= this.state.y + 17 && this.props.y_paddle1 >= this.state.y && this.state.x >= this.props.x_paddle1 && this.state.x <= this.props.x_paddle1 + 170 && this.props.direction_paddle1 == 1) {
            this.setState({ dy: -1, dx: 1 });
        }
        else if (this.props.y_paddle1 <= this.state.y + 17 && this.props.y_paddle1 >= this.state.y && this.state.x >= this.props.x_paddle1 && this.state.x <= this.props.x_paddle1 + 170 && this.props.direction_paddle1 == 0) {
            this.setState({ dy: -1, dx: 0 });
        }
        else if (this.props.y_paddle2 >= this.state.y - 37 && this.props.y_paddle2 <= this.state.y && this.state.x >= this.props.x_paddle2 && this.state.x <= this.props.x_paddle2 + 170 && this.props.direction_paddle2 == 1) {
            this.setState({ dy: 1, dx: 1 });
        }
        else if (this.props.y_paddle2 >= this.state.y - 37 && this.props.y_paddle2 <= this.state.y && this.state.x >= this.props.x_paddle2 && this.state.x <= this.props.x_paddle2 + 170 && this.props.direction_paddle2 == -1) {
            this.setState({ dy: 1, dx: -1 });
        }
        else if (this.props.y_paddle2 >= this.state.y - 37 && this.props.y_paddle2 <= this.state.y && this.state.x >= this.props.x_paddle2 && this.state.x <= this.props.x_paddle2 + 170 && this.props.direction_paddle2 == 0) {
            this.setState({ dy: 1, dx: 0 });
        }
        else if (this.state.x <= 0) {
            this.setState({ dx: 1 })
        }
        else if (this.state.x >= 800) {
            this.setState({ dx: -1 })
        }
    }

    updatePosition() {
        this.reset();
        this.checkCollision();
        this.setState({
            x: this.state.x + this.state.dx * this.state.speed,
            y: this.state.y + this.state.dy * this.state.speed
        });
        this.props.getPos(this.state.x, this.state.y);
    }

    render() {
        return <circle id={this.id} cx={this.state.x} cy={this.state.y} r="17" fill="LemonChiffon"></circle>;
    }
}


export default Ball;