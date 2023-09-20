import React, { useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import Container from '../root/Container';
import {
  Hero,
  SitSection,
  SemiSection,
  RestSection,
  DesignSection,
  SVGSection,
  Customiser,
  CheckoutSection,
  SignUpSection,
  FAQSection,
} from '@/components/home';
import PageProgress from '../root/PageProgress';
import { scrollUtils } from '@/hooks/scrollUtils';

const sections = [
  { component: Hero, key: 1 },
  { component: SVGSection, key: 2 },
  { component: SitSection, key: 3 },
  { component: SemiSection, key: 4 },
  { component: RestSection, key: 5 },
  { component: DesignSection, key: 6 },
  { component: CheckoutSection, key: 7 },
  { component: SignUpSection, key: 8 },
  { component: FAQSection, key: 9 },
];

const RANGES = [
  { start: 0, end: 1 / 9, copy: 1 },
  { start: 1 / 9, end: 1 / 9, copy: 2 },
  { start: 2 / 9, end: 1 / 9, copy: 3 },
  { start: 3 / 9, end: 1 / 9, copy: 4 },
  { start: 4 / 9, end: 1 / 9, copy: 5 },
  { start: 5 / 9, end: 1 / 9, copy: 6 },
  { start: 6 / 9, end: 1 / 9, copy: 7 },
  { start: 7 / 9, end: 1 / 9, copy: 8 },
  { start: 8 / 9, end: 9, copy: 9 },
];

export default function HTMLOverlay() {
  const [state, setState] = useState({
    customiser: false,
    pageProgress: false,
    copy: -1,
  });

  useLenis(({ progress }) => {
    scrollUtils.updateOffset(progress);

    const newCustomiser = scrollUtils.visible(2 / 9, 5 / 9);
    const newPageProgress = scrollUtils.visible(1 / 9, 9);
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
    <div className="fixed w-screen h-screen">
      {sections.map(({ component: Section, key }) => (
        <div
          key={key}
          style={{
            opacity: state.copy === key ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
          className="absolute w-screen h-screen"
        >
          <Container>
            <div className="flex w-full flex-col items-center">
              <div className="my-12 h-full w-11/12 z-10">
                <Section />
              </div>
            </div>
          </Container>
        </div>
      ))}

      {/* For SVGSection */}
      {/* <div
        key="SVGSection"
        style={{
          opacity: state.copy === 2 ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
        className="absolute w-screen h-screen"
      >
        <SVGSection />
      </div> */}

      {/* For Customiser */}
      <div
        key="Customiser"
        style={{
          opacity: state.customiser ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <div className="fixed top-[90vh] z-10 mb-6 flex h-auto w-screen justify-center">
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
        <div className="fixed sm:right-8 right-2 top-1/2 transform -translate-y-1/2 z-10">
          <PageProgress />
        </div>
      </div>
    </div>
  );
}
