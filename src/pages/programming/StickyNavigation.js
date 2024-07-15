import { useEffect } from 'react';
import './Programming.css';

const StickyNavigation = () => {
  useEffect(() => {
    let currentId = null;
    let currentTab = null;
    const tabContainerHeight = 70;

    const onTabClick = (event, id) => {
      event.preventDefault();
      const scrollTop = document.querySelector(id).offsetTop - tabContainerHeight + 1;
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    };

    const onScroll = () => {
      checkTabContainerPosition();
      findCurrentTabSelector();
      checkEndOfContent();
    };

    const onResize = () => {
      if (currentId) {
        setSliderCss();
      }
    };

    const checkTabContainerPosition = () => {
      const offset = document.querySelector('.et-hero-tabs').offsetTop + document.querySelector('.et-hero-tabs').offsetHeight - tabContainerHeight;
      if (window.scrollY > offset) {
        document.querySelector('.et-hero-tabs-container').classList.add('et-hero-tabs-container--top');
      } else {
        document.querySelector('.et-hero-tabs-container').classList.remove('et-hero-tabs-container--top');
      }
    };

    const checkEndOfContent = () => {
      const tabsContainer = document.querySelector('.et-hero-tabs-container--top');
      const lastSection = document.querySelector('main .et-slide:last-child');
      if (tabsContainer && lastSection) {
        const lastSectionOffset = lastSection.getBoundingClientRect().bottom;
        if (lastSectionOffset < tabContainerHeight) {
          tabsContainer.style.visibility = 'hidden';
        } else {
          tabsContainer.style.visibility = 'visible';
        }
      }
    };

    const findCurrentTabSelector = () => {
      let newCurrentId;
      let newCurrentTab;
      const tabs = document.querySelectorAll('.et-hero-tab');
      tabs.forEach((tab) => {
        const id = tab.getAttribute('href');
        const offsetTop = document.querySelector(id).offsetTop - tabContainerHeight;
        const offsetBottom = document.querySelector(id).offsetTop + document.querySelector(id).offsetHeight - tabContainerHeight;
        if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
          newCurrentId = id;
          newCurrentTab = tab;
        }
      });
      if (currentId !== newCurrentId || currentId === null) {
        currentId = newCurrentId;
        currentTab = newCurrentTab;
        setSliderCss();
      }
    };

    const setSliderCss = () => {
      let width = 0;
      let left = 0;
      if (currentTab) {
        width = currentTab.offsetWidth + 'px';
        left = currentTab.offsetLeft + 'px';
      }
      const slider = document.querySelector('.et-hero-tab-slider');
      slider.style.width = width;
      slider.style.left = left;
    };

    document.querySelectorAll('.et-hero-tab').forEach((tab) => {
      tab.addEventListener('click', (event) => onTabClick(event, tab.getAttribute('href')));
    });
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
};

export default StickyNavigation;
