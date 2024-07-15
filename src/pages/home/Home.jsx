import Door from '../../components/doors/Door';
import './Home.css';

const Home = () => {
  return (
    <div className="Home hover-target">
      <Door 
        to="/programming" 
        label="Programming" 
        className="programming" 
        bgClassName="progBg" 
        backgroundImage="/assets/images/welcome__Page__img/prog1.png" 
        smallBg="/assets/images/welcome__Page__img/lstf1.png" 
      />
      <Door 
        to="/astronomie" 
        label="Astronomie" 
        className="astronomie" 
        bgClassName="astroBg" 
        backgroundImage="/assets/images/welcome__Page__img/nightSky4.png" 
        smallBg="/assets/images/welcome__Page__img/lstf2.png" 
      />
      <Door 
        to="/design" 
        label="My Art" 
        className="design" 
        bgClassName="designBg" 
        backgroundImage="/assets/images/welcome__Page__img/jeeL4.png" 
        smallBg="/assets/images/welcome__Page__img/lstf3.png" 
      />
      <Door 
        to="/hobbies" 
        label="Hobbies" 
        className="hobbies" 
        bgClassName="hobbiesBg" 
        backgroundImage="/assets/images/welcome__Page__img/youvsyou2.png" 
        smallBg="/assets/images/welcome__Page__img/lstf4.png" 
      />
    </div>
  );
};

export default Home;

