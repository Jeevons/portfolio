import "./Projets.css";
import { data } from "./data";

const Section = ({ title, items }) => (
  <div className={`${title.toLowerCase()}-container col`}>
    <div className="head">
      <h2 className={`${title.toLowerCase()}-title titles`}>{title}</h2>
    </div>
    <div className="contents">
      {items.map((item, index) => (
        <div key={index} className={`${title.toLowerCase()}-content smBox`}>
          <h4>{item.year}</h4>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Education = () => (
  <div className="gigaBox">
    <div className="bigBox">
      <main className="row">
        <Section title="Education" items={data.education} />
        <Section title="Experiences" items={data.experiences} />
      </main>
    </div>
  </div>
);

export default Education;
