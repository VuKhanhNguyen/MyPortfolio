const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Frontend Developer Portfolio. Built
          with ReactJS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
