import Header from './Header'
import Body from './Body'


const Content = ({ contentToShow, currCurrency }) => {
    return (
        <div className='content'>
            <Header currCurrency={currCurrency}/>
            <Body contentToShow={contentToShow} />
        </div>
    )
}

export default Content