import React from 'react';
import HeaderProductList from './HeaderProductList';

const ListProduct:React.FC = () => {
  return (
    <div className="Products">
      <HeaderProductList />
      <div className="List-Products grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-16 gap-y-16 md:gap-x-5 px-10 mt-14">
        This is content list product
      </div>
    </div>
  );
}

export default ListProduct;