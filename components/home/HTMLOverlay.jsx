import React, { useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import {
  SitSection,
  SemiSection,
  RestSection,
  DesignSection,
  Customiser,
} from '@/components/home';
import PageProgress from '../root/PageProgress';
import { scrollUtils } from '@/hooks/scrollUtils';

const sections = [
  // { component: Hero, key: 1 },
  // { component: SVGSection, key: 2 },
  { component: SitSection, key: 3 },
  { component: SemiSection, key: 4 },
  { component: RestSection, key: 5 },
  { component: DesignSection, key: 6 },
  // { component: CheckoutSection, key: 7 },
  // { component: SignUpSection, key: 8 },
  // { component: Contact, key: 9 },
];

const RANGES = [
  // { start: 0, end: 1 / 9, copy: 1 },
  // { start: 1 / 9, end: 1 / 9, copy: 2 },
  { start: 1.8 / 9, end: 1.2 / 9 - 0.01, copy: 3 },
  { start: 3 / 9 + 0.01, end: 1 / 9 - 0.01, copy: 4 },
  { start: 4 / 9 + 0.01, end: 1 / 9 - 0.01, copy: 5 },
  { start: 5 / 9 + 0.01, end: 3 / 9 - 0.01, copy: 6 },
  // { start: 6 / 9 + 0.02, end: 1 / 9 - 0.01, copy: 7 },
  // { start: 7 / 9, end: 2 / 9, copy: 8 },
  // { start: 8 / 9, end: 9, copy: 9 },
];

export default function HTMLOverlay() {
  const [state, setState] = useState({
    customiser: false,
    pageProgress: false,
    copy: -1,
  });

  useLenis(({ progress }) => {
    scrollUtils.updateOffset(progress);

    const newCustomiser = scrollUtils.visible(1.5 / 9, 9 / 9);
    const newPageProgress = scrollUtils.visible(0 / 9, 9);
    let newCopy = -1;

    for (const range of RANGES) {
      if (scrollUtils.visible(range.start, range.end)) {
        newCopy = range.copy;
        break;
      }
    }

    setState((prevState) => ({
      ...prevState,
      customiser: newCustomiser,
      pageProgress: newPageProgress,
      copy: newCopy,
    }));
  });

  // console.log(scrollY.toFixed(3));

  return (
    <div className="fixed w-screen h-screen z-0">
      {sections.map(({ component: Section, key }) => (
        <div
          key={key}
          style={{
            opacity: state.copy === key ? 1 : 0,
            transition: 'opacity 0.7s ease',
            visibility: state.copy === key ? 'visible' : 'hidden',
          }}
          className="absolute w-screen h-screen z-10"
        >
          <div className="mx-auto h-full container flex w-full flex-col items-center">
            <div className="my-12 h-full w-11/12 ">
              <Section />
            </div>
          </div>
        </div>
      ))}

      {/* For Customiser */}
      <div
        className="z-50"
        key="Customiser"
        style={{
          opacity: state.customiser ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <div className="fixed bottom-5 z-10 flex h-auto w-screen justify-center">
          <Customiser />
        </div>
      </div>

      {/* For PageProgress */}
      <div
        key="PageProgress"
        style={{
          opacity: state.pageProgress ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <div className="fixed sm:right-8 right-2 top-1/2 transform -translate-y-1/2 z-20">
          <PageProgress />
        </div>
      </div>
    </div>
  );
}
