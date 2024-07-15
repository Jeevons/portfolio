import { useEffect } from 'react';
import './Design.css';

const Modal = () => {
  useEffect(() => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const images = document.querySelectorAll(".gallery img");
    const span = document.getElementsByClassName("close")[0];

    images.forEach((image) => {
      image.onclick = () => {
        modal.style.display = "block";
        modalImg.src = image.src;
      };
    });

    span.onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }, []);

  return (
    <div id="modal" className="modal">
      <span className="close">&times;</span>
      <img className="modal-content" id="modal-img" />
    </div>
  );
};

export default Modal;
