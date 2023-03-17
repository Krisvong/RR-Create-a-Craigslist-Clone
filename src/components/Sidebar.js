import Help from './Help';

const liStyle = {
    'display' : 'inline',
    'margin' : '2px',
    'padding' : '1px',
    'border' : '1px solid black'
}

const Sidebar= (props) => {
    return (
        <div className="sidebar">
            <h2>Listings</h2>
         <div>
            <ul>
                <li style={liStyle}><a href="#">Post an Ad</a></li>
                <li style={liStyle}><a href="#">My Account</a></li>
                <li style={liStyle}><a href="#">Help</a></li>
            </ul>
        </div>
            <Help />
        </div>
    );
};
export default Sidebar;