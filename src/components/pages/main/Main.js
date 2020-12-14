import React from 'react';
import Action from './Action';
import Brands from './Brands';
import Hero from './Hero';
import Info from './Info';
import Linker from './Linker';
import Scroll from './Scroll';

export default function Main() {
  return (
    <div>
      <Hero />
      <Linker />
      <Scroll />
      <Info />
      <Brands />
      <Action />
    </div>
  )
}