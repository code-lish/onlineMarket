const Header = ({ title, fs }) => {
  return (
    <h1 style={{ fontSize: `${fs}` }} className="my-4 text-dark px-4 fw-bold">
      {title}
    </h1>
  );
};

export default Header;
