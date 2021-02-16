import React from 'react'
import NavBar from './components/NavBar'
import Content from './components/Content'

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
        this.state = {
            curr_currency: 0,
            life_currency: 0,
            term_currency: 0,
            start_life_currency: 0,
            storage_space: 0,
            cur_content: Game.ContentEnum.HARDWARES
        }
    }

    onChange = (new_content) => {
        this.setState({
            cur_content: new_content
        })
    }

    gainRevenue = (revenue_gained) => {
        this.setState({
            curr_currency: this.state.curr_currency + revenue_gained,
            life_currency: this.life_currency + revenue_gained,
            term_currency: this.term_currency + revenue_gained
        })
    }

    render() {
        return (
            <div className="game">
                <NavBar onChange={this.onChange}/>
                <Content contentToShow={this.state.cur_content} currCurrency={this.state.curr_currency} gainRevenue={this.gainRevenue}/>
            </div>
        )
    }
}

export default Game