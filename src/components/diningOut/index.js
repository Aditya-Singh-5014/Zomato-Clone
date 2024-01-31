import React from 'react';
import "./diningOut.css"
import Collection from '../common/collections';
import { diningOut } from '../../data/diningOut';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSections';


const collectionList = [
  {
    id: 1,
    title: "Lit Lohri Celebrations",
    cover:"https://b.zmtcdn.com/data/collections/fc67de5361cc4492d4521033028f556a_1705053004.png",
    places:"19 Places"
  },
  {
    id: 2,
    title: "Unique Dining Experiences",
    cover:"https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places:"10 Places"
  },
  {
    id: 3,
    title: "Hot Chocolate Havens",
    cover:"https://b.zmtcdn.com/data/collections/0a4f52d9dc95cf3a5d3cf05f2299c1bf_1704348957.png",
    places:"22 Places"
  },
  {
    id: 4,
    title: "Best Insta-worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/ae71f4c72fda8a608a3650b15a994fdb_1696838475.jpg",
    places:"21 Places"
  },
  {
    id: 5,
    title: "Cozy Heated Outdoors ",
    cover:"https://b.zmtcdn.com/data/collections/2022843bd23fe6c24f67cbea79836a4f_1704970294.png",
    places:"13 Places"
  },
  {
    id: 6,
    title: "Viral Chocolate Strawberry Places",
    cover:"https://b.zmtcdn.com/data/collections/f680cb735b020df1a0c16b08ddf58ffc_1704176327.png",
    places:"9 Places"
  },
  {
    id: 7,
    title: "Newly Opened Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923139.png",
    places:"11 Places"
  },
  {
    id: 8,
    title: "Winter Special Menus",
    cover:"https://b.zmtcdn.com/data/collections/1fbced97ffd71219924a7c96df83a473_1701751306.jpg",
    places:"10 Places"
  },
  
]
const diningFilters=[
  {
    id:1,
    icon:<i class="fa fa-sliders absolute-center"></i>,
    title:"Filters",
  },
  {
    id:2,
    title:"Rating: 4.0+",
  },
  {
    id:3,
    title:"Outdoor Seating",
  },
  {
    id:4,
    title:"Serves Alcohol",
  },
  {
    id:5,
    icon:<i class="fa fa-arrows-up-down absolute-center"></i>,
    title:"Delevery Time",
  },
  {
    id:6,
    title:"Opean Now",
  },
]

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list = {collectionList}/>
      <div className="max-width">
        <Filters filterLists={diningFilters}/> 
      </div>
      <ExploreSection list={diningList} collectionName="Dini-Out Restaurants in Noida" />
    </div>
  )
}

export default DiningOut;
