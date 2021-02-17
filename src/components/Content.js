import Header from './Header'
import Body from './Body'


const Content = ({ contentToShow, currCurrency, gainRevenue, purchase }) => {
    return (
        <div className='content'>
            <Header currCurrency={currCurrency}/>
            <Body contentToShow={contentToShow} gainRevenue={gainRevenue} purchase={purchase}/>
        </div>
    )
}

export default Content