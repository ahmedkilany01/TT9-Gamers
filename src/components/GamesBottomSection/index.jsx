import Container from "../Container";
import Friends from "../Friends";
import LastPlayed from "../LastPlayed";
import MostRecent from "../MostRecent";
import Style from "./style.module.css";

const GamesBottomSection = () => {
  return (
    <Container>
      <div className={Style.parent_div}>
        <LastPlayed />
        <MostRecent />
        <Friends />
      </div>
    </Container>
  );
};

export default GamesBottomSection;
