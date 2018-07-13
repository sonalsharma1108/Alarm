import React from 'react';
import './index.css';
import DateTimePicker from 'react-datetime-picker';
import ReactTimeout from 'react-timeout';

let myVar;
class App extends React.Component {

    constructor(props) {
        super(props);
        this.setAlarm = this.setAlarm.bind(this);
    }

    state = {
        date: new Date(),
        alarmDateTime: new Date(),
        text: " No Alarm Set"
    }

    checkAlaram(dt) {
        var currDate = new Date();
        currDate.setSeconds(0, 0);

        if (dt.toISOString() == currDate.toISOString()) {
            alert("Ting Ting Ting");
            clearTimeout(myVar);
            return;
        }

        myVar = setTimeout(() => this.checkAlaram(dt), 3000)
    }

    setAlarm() {
        this.state.alarmDateTime = this.state.date;
        this.setState({
            text: this.state.alarmDateTime.toLocaleString()
        });
        myVar = setTimeout(() => this.checkAlaram(this.state.alarmDateTime), 3000)
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="mx-auto margin-top-10">
                        <h2>React Alarm Clock</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="mx-auto margin-top-10">
                        <DateTimePicker
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="mx-auto margin-top-10">
                        <input type="button" value="Set Alarm" className="btn-block" onClick={this.setAlarm} />
                    </div>
                </div>
                <div className="row">
                    <div className="mx-auto margin-top-10">
                        <b>Alarm Time : </b>
                        <span>
                            {this.state.text}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReactTimeout(App)