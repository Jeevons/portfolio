import "./Footer.css";

const addressItems = [
  "1 rue du Terme Boréal, 77127 Lieusiant France",
  "306 RUE VICTOR HUGO, 37000 Tours France",
  "07.81.38.43.95",
  "jeevons.eya.jr@gmail.com",
];

const Address = () => (
  <div className="footer-adress">
    <ul className="adress-list">
      {addressItems.map((item, index) => (
        <li className="adress-item" key={index}>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Address;
