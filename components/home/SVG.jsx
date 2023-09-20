import React, { useEffect, useRef } from 'react';

const ZeroDVSVG = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgObject = svgRef.current;
    if (svgObject && svgObject.contentDocument) {
      const lines = svgObject.contentDocument.querySelectorAll('line');
      lines.forEach((line) => {
        line.setAttribute('stroke', '#000000');
      });
    }
  }, []);

  return (
    <div className="h-full w-full overflow-hidden">
      <object
        ref={svgRef}
        id="svgObject"
        type="image/svg+xml"
        data="/ZeroDV.svg"
        className="w-[130vw] -translate-x-[15%] transform  sm:w-full sm:translate-x-0"
      ></object>
    </div>
  );
};
