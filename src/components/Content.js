import Header from './Header'
import Body from './Body'


const Content = ({ contentToShow, currCurrency, gainRevenue }) => {
    return (
        <div className='content'>
            <Header currCurrency={currCurrency}/>
            <Body contentToShow={contentToShow} gainRevenue={gainRevenue}/>
        </div>
    )
}

export default Content