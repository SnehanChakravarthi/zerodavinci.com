import React from 'react';
import Container from '../root/Container';

// const ZeroDVSVG = () => (
//   <div className="h-full w-full overflow-hidden">
//     <object
//       id="svgObject"
//       type="image/svg+xml"
//       data="/ZeroDVVitruvian.svg"
//     ></object>
//   </div>
// );

function Section2() {
  // const [player, setPlayer] = useState(null);
  // const svgObjectRef = useRef(null);

  // useEffect(() => {
  //   const svgDoc = svgObjectRef.current?.contentDocument;
  //   const element = svgDoc?.getElementById("eysYz8FNIVZ1");

  //   if (element && element.svgatorPlayer) {
  //     setPlayer(element.svgatorPlayer);
  //   }
  // }, []);

  // const scrollProcess = useScrollProgress();
  // scrollUtils.updateOffset(scrollProcess);

  // const scrollPosition = scrollUtils.range(1.3 / 10, 1 / 10) * 100;
  // player?.seek(scrollPosition);

  return (
    <div className="flex bg-neutral-100 h-screen w-full flex-col items-center justify-center border">
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <p className="text-4xl sm:text-4xl font-bold">
          Zero Boundaries, Infinite Possibilities
        </p>
        <p className=" text-3xl sm:text-4xl font-medium hidden sm:block">
          The Future is Yours with Zero da Vinci
        </p>
      </div>
      {/* <div className="flex w-full sm:h-full max-w-xl  sm:w-2/3 sm:grow ">
              <ZeroDVSVG />
            </div> */}
      <div className="flex justify-center items-center">
        <video className="w-full max-w-screen-md" autoPlay loop muted>
          <source src="/ZeroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className=" max-w-3xl  text-base font-medium mb-28  text-center px-2 hidden sm:block">
        Get ready to break the mold! Zero da Vinci delivers the ultimate freedom
        to switch between work and rest in a flash. It's not just furniture—it's
        a lifestyle revolution wrapped up in a unique, high-end statement piece
        that defines your innovative and mindful lifestyle.
      </p>
      <p className=" max-w-3xl  text-sm font-medium   sm:hidden mb-20  text-justify px-6">
        Break the mold with Zero da Vinci! Switch between work and rest in an
        instant, all within a high-end piece that defines your innovative,
        mindful lifestyle.
      </p>
    </div>
  );
}

export default Section2;
