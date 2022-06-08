import "./IndexPage.css";
import wallpaper from "../../assets/images/wall.png";

const IndexPage = () => {
  return (
    <div className="index-page">
      <h1 className="index-title">Welcome to the Rick and Morty API!</h1>
      <p className="index-description">
        This is a simple application that allows you to search for characters
        and episodes from the Rick and Morty API.
      </p>
      <img className="index-wallpaper" src={wallpaper} alt="wallpaper" />
    </div>
  );
};

export default IndexPage;
