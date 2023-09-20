export default function ARlayout({ children }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[70vh] w-full flex-col items-center justify-start">
        <p>Press the AR button in the bottom right corner!</p>
        {children}
      </div>
    </div>
  );
}
