import './Footer.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Rick and Morty API</p>
    </footer>
  );
};

export default Footer;
