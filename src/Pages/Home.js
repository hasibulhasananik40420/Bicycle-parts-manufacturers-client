import React from 'react';
import BussinessSummary from './BussinessSummary';
import Contact from './Contact';
import Header from './Header';
import OurTeams from './OurTeams';

const Home = () => {
    return (
        <div>
          <Header></Header>
           <BussinessSummary></BussinessSummary>
            <OurTeams></OurTeams>
           <Contact></Contact>
        </div>
    );
};

export default Home;