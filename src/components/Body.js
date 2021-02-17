import PropTypes from 'prop-types'
import Game from '../Game.js'
import Hardwares from './Hardwares'
const Body = ({ contentToShow, gainRevenue, purchase }) => {
    return (
        <div className='body'>
            {contentToShow === Game.ContentEnum.HARDWARES && <Hardwares gainRevenue={gainRevenue} purchase={purchase}/>}
        </div>
    )
}

// Body.defaultProps = {
//     contentToShow: ContentEnum.HARDWARE
// }

// Body.propTypes = {
//     contentToShow: ContentEnum.HARDWARE
// }

export default Body