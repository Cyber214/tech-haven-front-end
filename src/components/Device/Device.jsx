import styles from './Device.module.css'

import { NavLink } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className={styles.container}>
			<NavLink to={`/devices/${props.device._id}`}>
        <header>
          <img src={props.device.photo} width="120" height="130" alt="device photo" />    
          <span>
            <h2>{props.device.make}</h2>
            <p>{props.device.model}</p>
            <p>Price: ${props.device.price}</p>
          </span>
        </header>
      </NavLink>
      <button onClick={() => props.removeFromCart(props.idx)}>X</button>
    </div>
  )
}

export default Item