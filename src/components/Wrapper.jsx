function Wrapper({ children }) {
  return (
    <div className="mx-5 mt-5 flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default Wrapper;
