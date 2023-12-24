import React, { useEffect, useRef, useState } from 'react';
import './styles/PromotionalStrip.scss';

function InfiniteScrollBrand({ children, direction = 'forwards', speed = '40s' }) {
  const scrollerRef = useRef(null);
  const scrollerInnerRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    return () => removeAnimation();
  }, []);

  const addAnimation = () => {
    scrollerRef.current.setAttribute('data-animated', true);
    const scrollerInner = scrollerInnerRef.current;
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
    });

    scrollerInner.style.width = 'max-content';
    scrollerInner.style.flexWrap = 'nowrap';
    scrollerInner.style.animation = `scroll ${speed} ${direction} linear infinite`;
  };

  const removeAnimation = () => {
    return null
  };

  return (
    <div
      ref={scrollerRef}
      className="scroller max-w-full"
      data-speed={speed}
    >
      <div ref={scrollerInnerRef} className="scroller__inner flex flex-wrap gap-4">
        {children}
      </div>
    </div>
  );
}

export default function PromotionalStrip({displayConfig}) {
  return (
    <div className={displayConfig}>
      <InfiniteScrollBrand>
        <ul className="tag-list scroller__inner my-1 flex flex-wrap gap-4 list-none">
          <li className='p-2 font-bold italic text-sm text-white'>ENVIO GRATIS EN BOGOTA POR COMPRAS DESDE $80.000</li>
          <li className='p-2 font-bold italic text-sm text-white'>ENVIO GRATIS A TODO COLOMBIA COMPRAS DESDE $250.000</li>
          <li className='p-2 font-bold italic text-sm text-white'>ENVIO GARANTIZADO DE 4 A 5 DIAS</li>
        </ul>
      </InfiniteScrollBrand>
    </div>
  );
}