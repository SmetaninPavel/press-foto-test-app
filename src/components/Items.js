import React from 'react';
import './Items.css';
import Item from './Item';
import Pagination from './Pagination';

const Items = ({ 
  items, 
  onSelectItem, 
  selectedItems, 
  onRemoveItem, 
  onChangePage, 
  pages,
  limitation,
  countItems,
}) => 
  <div className='container'>
    <div className='image-counter'>
      {countItems + ' ИЗОБРАЖЕНИЙ'}
    </div>
    <div className={countItems ? 'items-box' : ''}>
      {items.map((item,index) => 
        <Item
          key={index}
          itemId={item['item_id']}
          itemImage={item['sample_url']}
          onSelectItem={() => onSelectItem(item['item_id'])}
          onRemoveItem={() => onRemoveItem([item['item_id']])}
          isSelectedItem={selectedItems.includes(item['item_id'])}
        />
      )}
    </div>
    <Pagination
      onChangePage={onChangePage}
      pages={pages}
    />
  </div>

export default Items;
