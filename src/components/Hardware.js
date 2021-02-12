import React from 'react'

// type: 'vaccuum_tube',
// name: 'Vaccuum Tube',
// initial_cost: 3.738,
// coefficient: 1.07,
// initial_time: 1.0,
// initial_revenue: 1.0,
// initial_storage: 1

class Hardware extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        let hardware = this.props.hardware
        this.state = {
            type: hardware.type,
            name: hardware.name,
            initial_cost: hardware.initial_cost,
            coefficient: hardware.coefficient,
            initial_time: hardware.initial_time,
            initial_revenue: hardware.initial_revenue,
            initial_storage: hardware.initial_storage,
            has_started: false,
            quantity: 1,
            cost: hardware.initial_cost,
            cost_scale: 1,
            time: hardware.initial_time,
            start_time: 0,
            time_left: 0,
            revenue: 0,
            revenue_scale: 1,
            is_managed: false
        }
    }

    start() {
        if (this.state.has_started || this.state.quantity <= 0) {
            return
        }
        let d = new Date()
        let now = d.getTime()
        this.setState({
            has_started: true,
            start_time: now,
            time_left: this.state.time
        })
        const interval = setInterval(() => {
            this.update()
        }, (1 / 60))
    }

    update() {
        if (!this.state.has_started) {
            return
        }
        let d = new Date()
        let now = d.getTime()
        let time_left = (this.state.time * 1000) - (now - this.state.start_time)
        this.setState({
            time_left: time_left <= 0 ? 0 : time_left
        })
        if (time_left <= 0) {
            this.props.gainRevenue(this.state.revenue)
            clearInterval(this.start.interval)
            this.state.has_started = false
            if (this.state.is_managed) {
                this.start()
            }
        }
    }

    render() {
        return (
            <div className='hardware'>
                <button id="start-button" onClick={() => this.start()} ><h5>START</h5></button>
                <div id="content">
                    <h3 id="name">{this.state.name}</h3>
                    <h3 id="time_left">{this.state.time_left}</h3>
                    <h3 id="cost">{this.state.cost}</h3>
                    <h3 id="revenue">{this.state.revenue}</h3>
                </div>
            </div>
        )
    }
}
export default Hardware