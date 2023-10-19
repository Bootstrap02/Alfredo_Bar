import React, { lazy, Suspense } from 'react';
import { Chef, FindUs, Footer, Header } from './container';
import { Navbar } from './components';
import './App.css';

const Gallery = lazy(() => import('./container/Gallery/Gallery'));
const SpecialMenu = lazy(() => import('./container/Menu/SpecialMenu'));
const AboutUs = lazy(() => import('./container/AboutUs/AboutUs'));
const Laurels = lazy(() => import('./container/Laurels/Laurels'));

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUs />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <SpecialMenu />
    </Suspense>
    <Chef />
    <Suspense fallback={<div>Loading...</div>}>
      <Laurels />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Gallery />
    </Suspense>
    <FindUs />
    <Footer />
  </div>
);

export default App;
