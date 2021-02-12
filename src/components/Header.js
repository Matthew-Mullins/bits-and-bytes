
const Header = ({ currCurrency }) => {
    return (
        <div className='header'>
            <h1 style={{color: 'white'}}>{currCurrency}</h1>
        </div>
    )
}

export default Header