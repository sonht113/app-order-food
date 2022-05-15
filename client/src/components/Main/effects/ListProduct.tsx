import React, { useEffect, useState } from 'react';
import HeaderProductList from './HeaderProductList';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import productApi from '../../../api/productApi';
import { productSlice } from '../ProductSlice';
import { selectRemainingProductResult } from '../../../app/selector';
import { Product } from '../../../models';
import { FaHotjar } from 'react-icons/all';

const ListProduct:React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    productApi
      .getAll()
      .then((res) => {
        dispatch(productSlice.actions.setProducts(res))
      })
  }, [])

  const listProduct: Product[] = useAppSelector(selectRemainingProductResult)
  console.log(listProduct);

  return (
    <div className="Products">
      <HeaderProductList />
      <div className="List-Products grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-16 gap-y-16 md:gap-x-5 px-10 mt-14">
        {   listProduct?.length === 0
          ?   <div className="w-2/3 mx-auto col-span-4 2xl:col-span-5">
            <h1 className="text-center text-2xl font-bold text-pink-600">Not found product :((( </h1>
          </div>
          : listProduct?.map((product: Product, index: number) => (
            <div
              key={index}
              className="flex relative group flex-col items-center shadow-lg cursor-pointer py-5 rounded-lg transition group ease-in-out delay-150 hover:scale-110 duration-300"
            >
              {
                product.isNew
                  ? <div className="Box-New absolute top-0 right-0 bg-red-400 px-2">
                    <span className="text-white italic text-sm">New</span>
                  </div>
                  : null
              }
              <div className="Product-image p-3 bg-yellow-200 rounded-full group-hover:animate-bounce delay-150">
                <img src={`http://localhost:5000/${product.image}`} alt="burger" className="w-full object-cover group-hover:scale-100 " style={{width: "100px", height: "100px"}}/>
              </div>
              <div className="Product-Content text-center mt-5">
                <div className="relative">
                  <h2 className="text-lg">{product.name}</h2>
                  {
                    product.isHot
                      ? <div className="Box-Hot absolute top-[-10px] right-[-10px]">
                        <FaHotjar className="fill-red-600 text-xl" />
                      </div>
                      : null
                  }
                </div>
                <p className="text-gray-500">$<span>{product.price}</span></p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ListProduct;