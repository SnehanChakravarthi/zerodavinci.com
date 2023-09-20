import * as ScrollArea from "@radix-ui/react-scroll-area";

const ScrollAreaDialog = ({ children }) => (
  <ScrollArea.Root className="w-full h-40 bg-slate-500 overflow-hidden">
    <ScrollArea.Viewport className="w-full h-full">
      {children}
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
);
export default ScrollAreaDialog;
