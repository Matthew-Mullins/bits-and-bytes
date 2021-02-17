import { truncateCurrency } from '../utility/utility'

const Header = ({ currCurrency }) => {
    return (
        <div className='header'>
            <h1 style={{color: 'white'}}>{'$' + String(truncateCurrency(currCurrency).value.toFixed(2)).padStart(6, '0') + ' ' + truncateCurrency(currCurrency).suffix}</h1>
        </div>
    )
}

export default Header