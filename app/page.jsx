"use client"

import ResizeListener from './resizeListener'
import DarkMode from './darkMode'

import Svg from './svg'
import DesktopHeader from './desktopHeader'
import MobileHeader from './mobileHeader'
import HomeSection from './homeSection'
import Products from './products'
import CategoryBanner from './categoryBanner'
import ProductsCategory from './productsCategory'
import BestSelling from './bestSelling'
import CoffeeClub from './coffeeClub'
import Blog from './blog'
import ContactUs from './contactUs'
import Services from './services'
import Footer from './footer'

import Overlay from './overlay'
import { useState, useEffect } from 'react'

export default function Home() {

  const [openNavbar, setOpenNavbar] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState(false);


  const handleNav = () => setOpenNavbar(!openNavbar);
  const handleCart = () => setOpenCart(!openCart);
  const handleDarkMode = () => setDarkMode(!darkMode);
  const handleSubmenu = () => setOpenSubmenu(!openSubmenu);


  useEffect(() => {

    if (openNavbar) {
      document.body.style.overflow = 'hidden';
    } else if (openCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

  }, [openNavbar, openCart]);


  return (
    <>

      <DarkMode darkMode={darkMode} />
      <ResizeListener />

      <Svg />
      <DesktopHeader handleDarkMode={handleDarkMode} />
      <MobileHeader handleToggleNav={handleNav} handleToggleCart={handleCart} openNavbar={openNavbar} openCart={openCart} handleDarkMode={handleDarkMode}  handleSubmenu={handleSubmenu} openSubmenu={openSubmenu}/>
      <main>
        <HomeSection />
        <Products />
        <CategoryBanner />
        <ProductsCategory />
        <BestSelling />
        <CoffeeClub />
        <Blog />
        <ContactUs />
        <Services />
      </main>

      <Footer />

      <Overlay handleToggleNav={handleNav} handleToggleCart={handleCart} openNavbar={openNavbar} openCart={openCart} />


    </>
  );
}
