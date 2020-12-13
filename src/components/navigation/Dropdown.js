import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
  const[click, setClick] = useState(false);

  return (
    <div>
      <ul onClick={() => setClick(!click)} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'} >
        {props.item.map((item, index) => {
          return (
            <li key={index}>
              <Link className="dropdown-link" to={item.path} onClick={() => setClick(false)}>
                <div className="dropdown-icon">
                  {item.icon}
                </div>
                <div>
                  <span className="dropdown-main">{item.title}</span>
                  <p className="dropdown-secondary">{item.description}</p>
                </div>
              </Link>
            </li>
          )
        })} 
      </ul>
    </div>
  )
}

export default Dropdown;