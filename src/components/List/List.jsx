import React from 'react';

import './List.scss';
import { Card } from '../Card';

export const List = (props) => {

  const description = (id) => (
   props.comments.find(c => c.productId === id)
  );

  return(
  <div className="card">
  {props.products.map(product => (
    <Card 
      key={product.id}
      edit={props.edit}
      {...product}
      {...description(product.id)}
      delete={props.delete}
    />
  ))}
</div>
)
};
