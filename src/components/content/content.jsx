import LinkCard from "../link-card/link-card";
import "./content.scss";
const Content = () => {
  return (
    <div className="content">
      <LinkCard
        linkName="Twitter Link"
        url="https://twitter.com/hussein_miracle"
        id={"twitter"}
      />
      <LinkCard
        linkName="Zuri Team"
        id={`btn__zuri`}
        url="https://training.zuri.team/"
      />
      <LinkCard
      refed={true}
        linkName="Python Books"
        url="http://books.zuri.team"
        id={"book__python"}
      />
      <LinkCard
        linkName="Background Check for Coders"
        url={"https://background.zuri.team"}
        id="pitch"
      />
      <LinkCard
        linkName="Design Books"
        url={"https://books.zuri.team/design-rules"}
        id="book__design"
      />
    </div>
  );
};

export default Content;
