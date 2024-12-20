const Keyboard = ({ keyboardElements, disabled }) => {
  return (
    <>
      <section className="keyboard">
        {disabled ? null : keyboardElements}
      </section>
    </>
  );
};

export default Keyboard;
