export function Card({ children }) {
  return (
    <>
      <div className="w-full p-4 bg-white border-2 border-dashed rounded">
        {children}
      </div>
    </>
  );
}
