import React from 'react';
import './delivery.css';
import Filters from '../common/filters';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSections';
import { restaurants } from '../../data/restourents';

const deliveryFilters=[
  {
    id:1,
    icon:<i class="fa fa-sliders absolute-center"></i>,
    title:"Filters",
  },
  {
    id:2,
    title:"Rating: 4+",
  },
  {
    id:3,
    title:"Safe and Hygienic",
  },
  {
    id:4,
    title:"Pure Veg",
  },
  {
    id:5,
    icon:<i class="fa fa-arrows-up-down absolute-center"></i>,
    title:"Delevery Time",
  },
  {
    id:6,
    title:"Great Offers",
  },
]

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterLists={deliveryFilters} />
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection list = {restaurantList} collectionName= 'Delivery Restaurants in Noida' />
    </div>
  )
}

export default Delivery;
