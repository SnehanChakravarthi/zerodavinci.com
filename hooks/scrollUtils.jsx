'use client';

// export const useScrollProgress = () => {
//   const progressRef = useRef(0);

//   useLenis(({ progress }) => {
//     progressRef.current = progress;
//   });

//   return progressRef;
// };

// Utility functions
export const scrollUtils = {
  offset: 0,
  updateOffset(newOffset) {
    this.offset = newOffset;
  },
  range(from, distance, margin = 0) {
    const start = from - margin;
    const end = start + distance + 2 * margin;
    const currentOffset = this.offset;

    if (currentOffset < start) return 0;
    if (currentOffset > end) return 1;
    return (currentOffset - start) / (end - start);
  },
  visible(from, distance, margin = 0) {
    const start = from - margin;
    const end = start + distance + 2 * margin;
    const currentOffset = this.offset;

    return currentOffset >= start && currentOffset <= end;
  },
};

// const scrollUtils = {
//   range: function (from, distance, margin = 0) {
//     const start = from - margin;
//     const end = start + distance + margin * 2;
//     return this.offset < start
//       ? 0
//       : this.offset > end
//       ? 1
//       : (this.offset - start) / (end - start);
//   },
//   curve: function (from, distance, margin = 0) {
//     return Math.sin(this.range(from, distance, margin) * Math.PI);
//   },
//   visible: function (from, distance, margin = 0) {
//     const start = from - margin;
//     const end = start + distance + margin * 2;
//     return this.offset >= start && this.offset <= end;
//   },
// };
