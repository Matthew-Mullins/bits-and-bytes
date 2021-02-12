import PropTypes from 'prop-types'
import ContentEnum from '../Game.js'
import Hardwares from './Hardwares'
const Body = ({ contentToShow }) => {
    return (
        <div className='body'>
            {contentToShow}
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