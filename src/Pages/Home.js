import React from 'react';
import BussinessSummary from './BussinessSummary';
import Contact from './Contact';
import Header from './Header';

const Home = () => {
    return (
        <div>
          <Header></Header>
           <BussinessSummary></BussinessSummary>
           <Contact></Contact>
        </div>
    );
};

export default Home;