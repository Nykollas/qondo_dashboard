import React from 'react';
import './style.css';
import SideMenu from './components/sidemenu';
import InfoCard from './components/infocard';
import UserProfile from './components/userprofile';
import SearchInput from './components/searchinput';
import LineChart from './components/linechart';
import PizzaChart from './components/pizzachart';
import BarsChart from './components/barschart';
import HorizontalBarsChart from './components/horizontalbarschart';


import { BellIcon } from './assets/icons';

import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux/reducer';

const store = createStore(reducer);



function App() {
  const dark = useSelector(state => state.dark);
  return (
    
      <div className="main">
        <SideMenu darkMode={false}></SideMenu>
        <div className="data-container" style={ dark ? { backgroundColor: "#212427" } : { backgroundColor: "var(--light-bg)" }}>
          <div className="row">
            <p style={dark ? { color:"#CACACA"} :{ color:"#4F4F4F"}}>Statistics</p>
            <SearchInput></SearchInput>
            <BellIcon></BellIcon>
            <UserProfile imgUrl={"https://image.freepik.com/fotos-gratis/alegre-mulher-envelhecida-media-com-cabelos-cacheados_1262-20859.jpg"} name={"Anna"}></UserProfile>
          </div>
          <div className="row">
            <InfoCard up={false} title={"Friends"} value={10} percent={0.7}></InfoCard>
            <InfoCard up={true} title={"Unique Visitors"} value={20} percent={0.7}></InfoCard>
            <InfoCard up={true} title={"Followers"} value={10} percent={0.7}></InfoCard>
          </div>
          <div className="row">
            <LineChart></LineChart>
            <PizzaChart></PizzaChart>
          </div>
          <div className="row">
            <BarsChart></BarsChart>
            <HorizontalBarsChart></HorizontalBarsChart>
          </div>
        </div>
      </div>
  );
}
const AppWrapper:React.FC = () => {
  return <Provider store={store}>
        <App/>
  </Provider>
}


export default AppWrapper;
