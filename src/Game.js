import React from 'react'
import NavBar from './components/NavBar'
import Content from './components/Content'

import { getCost } from './utility/utility'

// import Facilities from './components/Facilities'

class Game extends React.Component {
    static ContentEnum = {
        HARDWARES: 0,
        FACILITIES: 1,
        UPGRADES: 2,
        UNLOCKS: 3,
        INVESTORS: 4,
        STATS: 5
    }

    constructor(props) {
        super(props)
        const localState = localStorage.getItem('game_data')
        if (localState !== null) {
            this.state = JSON.parse(localState)
        } else {
            this.state = {
                curr_currency: 0,
                life_currency: 0,
                term_currency: 0,
                start_life_currency: 0,
                storage_space: 0,
                cur_content: Game.ContentEnum.HARDWARES
            }
        }
    }

    onChange = (new_content) => {
        this.setState({
            cur_content: new_content
        })
    }

    purchase = (quantity, curr_cost, coefficient) => {
        let purchase_cost = getCost(quantity, curr_cost, coefficient)
        if (this.state.curr_currency < purchase_cost) {
            return false
        }
        let new_currency = this.state.curr_currency - purchase_cost
        this.setState({
            curr_currency: new_currency
        }, () => localStorage.setItem('game_data', JSON.stringify(this.state)))
        return true
    }

    gainRevenue = (revenue_gained) => {
        this.setState({
            curr_currency: this.state.curr_currency + revenue_gained,
            life_currency: this.state.life_currency + revenue_gained,
            term_currency: this.state.term_currency + revenue_gained
        }, () => localStorage.setItem('game_data', JSON.stringify(this.state)))
    }

    render() {
        return (
            <div className="game">
                <NavBar onChange={this.onChange}/>
                <Content contentToShow={this.state.cur_content} currCurrency={this.state.curr_currency} gainRevenue={this.gainRevenue} purchase={this.purchase}/>
            </div>
        )
    }
}

export default Game