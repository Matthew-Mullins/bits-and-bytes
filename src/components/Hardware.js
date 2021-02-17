import React from 'react'
import { truncateCurrency, truncateStorage, toHourMinSec } from '../utility/utility.js'

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
        this.interval = null
        let hardware = this.props.hardware
        const localState = window.localStorage.getItem(hardware.type);
        if (localState !== null) {
            this.state = JSON.parse(localState)
        } else {
            this.state = {
                type: hardware.type,
                name: hardware.name,
                initial_cost: hardware.initial_cost,
                coefficient: hardware.coefficient,
                initial_time: hardware.initial_time,
                initial_revenue: hardware.initial_revenue,
                initial_storage: hardware.initial_storage,
                has_started: false,
                quantity: 0,
                cost: hardware.initial_cost,
                cost_scale: 1,
                time: hardware.initial_time,
                start_time: 0,
                time_left: 0,
                revenue: 0,
                revenue_scale: 1,
                storage: 0,
                storage_scale: 1,
                is_managed: false
            }
        }
    }

    componentDidMount() {
        if (this.state.type == 'vaccuum_tube' && this.state.quantity == 0) {
            this.upgrade(1)
        }
        if (this.state.has_started) {
            this.startInterval()
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
        }, () => this.startInterval())
    }

    startInterval() {
        this.interval = setInterval(() => {
            this.update()
        }, (1 / 60))
    }

    purchase(quantity) {
        if (this.props.purchase(quantity, this.state.cost, this.state.coefficient)) {
            this.upgrade(quantity)
        }
    }

    upgrade(num_times) {
        let quantity_increase = 0
        let new_cost = this.state.cost
        for (let i = 0; i < num_times; i++) {
            quantity_increase += 1
            new_cost *= this.state.coefficient
        }
        this.setState({
            quantity: this.state.quantity + quantity_increase,
            cost: new_cost
        }, () => {this.updateRevenue(); this.updateStorage(); localStorage.setItem(this.state.type, JSON.stringify(this.state))})
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
        }, () => localStorage.setItem(this.state.type, JSON.stringify(this.state)))
        if (time_left <= 0) {
            this.setState({
                has_started: false
            }, () => localStorage.setItem(this.state.type, JSON.stringify(this.state)))
            this.props.gainRevenue(this.state.revenue)
            clearInterval(this.interval)
            if (this.state.is_managed) {
                this.start()
            }
        }
    }

    updateRevenue() {
        let new_revenue = this.state.initial_revenue * this.state.quantity * this.state.revenue_scale
        this.setState({
            revenue: new_revenue
        }, localStorage.setItem(this.state.type, JSON.stringify(this.state)))
    }

    updateStorage() {
        let new_storage = this.state.initial_storage * this.state.quantity * this.state.storage_scale
        this.setState({
            storage: new_storage
        }, localStorage.setItem(this.state.type, JSON.stringify(this.state)))
    }

    render() {
        return (
            <div className='hardware'>
                <button id="start-button" onClick={() => this.start()} ><h5>START</h5></button>
                <div id="content">
                    <h3 id="quantity">{'[' + this.state.quantity + ']'}</h3>
                    <h3 id="name">{this.state.name}</h3>
                    <h3 id="time_left">{toHourMinSec(this.state.time_left)}</h3>
                    <h3 id="time_left_suffix">HH:MM:SS</h3>
                    <button id="purchase_button" onClick={() => this.purchase(1)}>
                        <h3 id="buy">
                            BUY 1
                        </h3>
                        <h3 id="cost">
                            { String(truncateCurrency(this.state.cost).value.toFixed(2)).padStart(6)}
                        </h3>
                        <h3 id="cost_suffix">
                            { truncateCurrency(this.state.cost).suffix }
                        </h3>
                    </button>
                    <h3 id="revenue_text">
                        REVENUE
                    </h3>
                    <h3 id="revenue">
                            { String(truncateCurrency(this.state.revenue).value.toFixed(2)).padStart(6)}
                        </h3>
                    <h3 id="revenue_suffix">
                        { truncateCurrency(this.state.initial_storage).suffix }
                    </h3>
                    <h3 id="storage_text">
                        STORAGE
                    </h3>
                    <h3 id="storage">
                        { String(truncateStorage(this.state.storage).value.toFixed(2)).padStart(7)}
                    </h3>
                    <h3 id="storage_suffix">
                        { truncateStorage(this.state.storage).suffix }
                    </h3>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}
export default Hardware