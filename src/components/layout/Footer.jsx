const Footer = () => {
  return (
    <footer
      style={{
        padding: "2rem 0",
        textAlign: "center",
        borderTop: "1px solid var(--glass-border)",
        background: "rgba(5, 5, 5, 0.8)",
      }}
    >
      <div className="container">
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} Frontend Developer Portfolio. Built
          with ReactJS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
