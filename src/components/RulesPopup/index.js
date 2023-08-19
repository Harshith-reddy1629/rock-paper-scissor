import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import './index.css'

const RulesPopup = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button className="rules-btn styled-btn" type="button">
          Rules
        </button>
      }
    >
      {close => (
        <>
          <div>
            <img
              className="rules-image"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </div>
          <button className="close-btn" type="button" onClick={() => close()}>
            <RiCloseLine size={18} />
          </button>
        </>
      )}
    </Popup>
  </div>
)

export default RulesPopup
