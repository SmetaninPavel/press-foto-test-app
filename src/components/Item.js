import React from 'react';
import './Item.css';

const Item = ({
  itemId,
  itemImage,
  onSelectItem,
  isSelectedItem,
  onRemoveItem
}) => 
  <div>
    <div className='item demo-card-square mdl-card mdl-shadow--2dp'>
      <div 
        style={{backgroundImage: 'url('+ itemImage +')', position: 'relative'}}
        className='mdl-card__title mdl-card--expand'
      > 
        <div 
          className={'viewed-item item-controlls ' + (isSelectedItem ? ' active' : '')}
        >
          <i className='material-icons'>remove_red_eye</i>
        </div>
        <div className={'background ' + (isSelectedItem ? ' active' : '')}>
        </div>
      </div>
      <div>
      <div className='mdl-card__actions mdl-card--border card-footer'>
        <div id='tt1' className='icon material-icons'>help</div>
        <div className='select'>
          <div id='tt2' className='icon material-icons'>arrow_drop_down</div>
          <h3>Выберите лицензию</h3>
        </div>
        <div id='tt1' className='icon material-icons credit-card'>credit_card</div>
      </div>
      <div 
        className={'item-controlls mdl-card__menu configurate-item no-choose-item ' + 
          (isSelectedItem ? ' active' : '')}
      >
        <button 
          onClick={onSelectItem}
          className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'
        > 
          <div className={isSelectedItem ? 'selected' : ''}>
            <i className='material-icons'>
              {isSelectedItem ? 'check_circle' : 'radio_button_unchecked'}
            </i>
          </div>
        </button>
      </div>
      <div className='item-controlls mdl-card__menu configurate-item'>
        <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>
          <i className='material-icons'>share</i>
        </button>
        <button 
          onClick={onRemoveItem}
          className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'
        >
          <i className='material-icons'>delete</i>
        </button>
        <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>
          <i className='material-icons'>file_download</i>
        </button>
      </div>
      </div>
    </div>
  </div>

export default Item;
