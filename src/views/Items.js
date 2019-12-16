import React from 'react';
import BaseLayout from "../layouts/BaseLayout"
import ItemList from "../components/ItemList"

const Items = (props) => {

  let { items } = props

  return (
    <BaseLayout {...props}>
      <div className="main__wrapper">
        <ItemList items={items} />
      </div>
    </BaseLayout>
  );
}

export default Items;
