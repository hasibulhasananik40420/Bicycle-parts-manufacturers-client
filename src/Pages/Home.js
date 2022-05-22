import React from 'react';
import BussinessSummary from './BussinessSummary';
import Contact from './Contact';
import Header from './Header';
import OurTeams from './OurTeams';
import Products from './Products';

const Home = () => {
    return (
        <div>
          <Header></Header>
           <Products></Products>
           <BussinessSummary></BussinessSummary>
            <OurTeams></OurTeams>
           <Contact></Contact>
        </div>
    );
};

export default Home;