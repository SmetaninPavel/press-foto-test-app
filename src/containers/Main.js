import React, { Component } from 'react';
import Footer from '../components/Footer';
import Items from '../components/Items';
import itemsData from '../data/items.json';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      items: itemsData.data.items,
      itemsOnPage: 6,
      selectedItems: [],
      pages: {
        current: 1,
        countArray: []
      } 
    }

    this.onSelectItem = this.onSelectItem.bind(this);
    this.onToggleSelectAllItems = this.onToggleSelectAllItems.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  onSelectItem(itemId) {
    this.setState({
      selectedItems: this.state.selectedItems.includes(itemId)
        ? this.state.selectedItems.filter(id => id !== itemId)
        : [...this.state.selectedItems, itemId]
    });
  }

  onToggleSelectAllItems() {
    this.setState({
      selectedItems: this.state.selectedItems.length 
      ? []
      : this.state.items.map(value => value['item_id'])
    });
  }

  onRemoveItem(selectedItems) {
    this.setState({
      items: this.state.items.filter(item => 
        selectedItems.indexOf(item['item_id']) === -1
      ),
      selectedItems: this.state.selectedItems.filter(id => 
        selectedItems.indexOf(id) === -1
      ),
      pages: {
        countArray: this.state.pages.countArray.filter(page =>
          page <= Math.ceil((this.state.items.length - selectedItems.length) / this.state.itemsOnPage)
        ),
        current: this.state.pages.current > Math.ceil((this.state.items.length - selectedItems.length) / this.state.itemsOnPage)
          ? 1 
          : this.state.pages.current,
      }
    });
  }

  onChangePage(page) {
    this.setState({
      pages: {
        ...this.state.pages,
        current: page
      }
    });
  }

  componentWillMount() {
    let countArr = [];
    for (let i = 1; i <= Math.ceil(this.state.items.length / 6); i++) {
      countArr.push(i);
    }

    this.setState({
      pages: {
        ...this.state.pages,
        countArray: countArr
      }
    });
  }
  
  render() {

    const { items, selectedItems, pages, itemsOnPage } = this.state;
 
    return (
      <div className='mdl-layout'>
        <Items
          items={items.slice(
            (pages.current - 1) * itemsOnPage, (pages.current - 1) * itemsOnPage + itemsOnPage
          )}
          pages={pages}
          countItems={items.length}
          limitation={pages.current * 6}
          selectedItems={selectedItems}
          onSelectItem={this.onSelectItem}
          onRemoveItem={this.onRemoveItem}
          onChangePage={this.onChangePage}
        />
        <Footer
          selectedItems={selectedItems}
          onRemoveItem={this.onRemoveItem}
          onToggleSelectAllItems={this.onToggleSelectAllItems}
        />
      </div>
    );
  }
}

export default Main;
