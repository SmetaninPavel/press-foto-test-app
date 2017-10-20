import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {

    const { selectedItems, onToggleSelectAllItems, onRemoveItem } = this.props;

    return (
      <div className="footer mdl-shadow--2dp">
        <div className="footer-container">
          <div className="items-choosed">
            <button 
              onClick={onToggleSelectAllItems} 
              className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">{selectedItems.length ? 'remove_circle_outline' : 'radio_button_unchecked'}</i>
            </button>
            {selectedItems.length
              ? <div className='items-counter'>
                  <span>{selectedItems.length}</span>
                  <h3>изображений выбрано</h3>
                </div>
              : <h3>Выделить всё</h3>
            }
          </div>
          <div className="items-controlls">
            <button 
              onClick={() => onRemoveItem(selectedItems)} 
              className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">delete</i>
            </button>
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">archive</i>
            </button>
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">credit_card</i>
            </button>
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">add_box</i>
            </button>
          </div>
          <div className="tips">
            <h3>Для отмены нажмите ESC</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
