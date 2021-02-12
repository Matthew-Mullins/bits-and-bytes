import Game from '../Game'

const NavBar = ({ onChange }) => {
    return (
        <div className='navbar'>
            <button onClick={() => onChange(Game.ContentEnum.HARDWARES)}>HARDWARE</button>
            <button onClick={() => onChange('oaml')}>FACILITIES</button>
            <button onClick={() => onChange('oaml')}>UPGRADES</button>
            <button onClick={() => onChange('oaml')}>UNLOCKS</button>
            <button onClick={() => onChange('oaml')}>STATS</button>
        </div>
    )
}

export default NavBar