import './Design.css';

const images = [
  "https://images.unsplash.com/photo-1506252374453-ef5237291d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
  "https://images.unsplash.com/photo-1536273176101-b3810e5cb3c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1524546101258-e99b0826ea9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",
  // Add other image URLs here
];

const Gallery = () => (
  <section className="gallery">
    <div className="containerImg">
      {images.map((src, index) => (
        <div key={index} className={getClassName(index)}>
          <img src={src} alt={index + 1} />
        </div>
      ))}
    </div>
  </section>
);

const getClassName = (index) => {
  if (index % 4 === 0) return "horizontal";
  if (index % 4 === 1) return "vertical";
  if (index % 4 === 2) return "big";
  return "";
};

export default Gallery;
