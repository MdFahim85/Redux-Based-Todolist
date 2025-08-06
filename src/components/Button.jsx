function Button({ className, dispatchHandler, text }) {
  return (
    <button className={className} onClick={() => dispatchHandler()}>
      {text}
    </button>
  );
}

export default Button;
