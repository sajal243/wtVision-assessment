// Component to create the main section

import React from 'react'

function Item({item}){
    return (  Object.keys(item).map(key => {
        const value = item[key];
        if (typeof value === 'object' && value !== null) {
          return (
            <div key={key} className='parent_card'>
              <h2>{key}</h2>
              <div>
                {<Item item={value} />}
              </div>
            </div>
          );
        } else {
          return (
            <div key={key} className='card'>
              <h3>{key}</h3> 
              <div>
              {value}
                </div>
            </div>
          );
        }
      }));
}

export default Item