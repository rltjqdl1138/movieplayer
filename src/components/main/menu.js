import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ()=>{
    return (
        <nav>
          <div>
              <ul className='main_menu'>
                    <li className='main_menu_item'>
                        <Link to="/">
                            <img src="/image/home" />
                        </Link>
                    </li>
                    <li className='main_menu_item'>
                        <Link to="/player">
                            <img src="/image/movie" />
                        </Link>
                    </li>
              </ul>
              <div className="main_menu_padding">

              </div>
          </div>
      </nav>
    )
}
export default Menu;