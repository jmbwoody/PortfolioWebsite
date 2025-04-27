import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../../constants/projects";
import GalleryItem from "../../components/galleryItem";
import Navbar from "../../components/navbar";
import $ from "jquery";
import "magnific-popup";
import "magnific-popup/dist/magnific-popup.css";
  
const Project = () => {
  window.scrollTo(0, 0);
  let { id } = useParams();
  const index = projects.findIndex(project => {
    return project.id === id;
  });

  const Images = projects[index].images.map((image, imageIndex) => {
    return (
      <GalleryItem
        key={imageIndex}
        item={image}
        image={image.imageName}
        hasImage={true}
      />
    );
  });

  useEffect(() => {
    $(".popup-img").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <section className="portfolio section-padding text-center project" data-scroll-index="3" >
        <div className="container">
          <div className="section-head wow zoomIn" data-wow-offset="200">
            <h3>{projects[index].mainHeader}</h3>
            
            <div className="row"> 
              <div className="col-lg-6 col-md-8 mx-auto projectContentsContainer">
                <div className="projectContents"> 
                
                  <p style={{ textAlign: 'left' }}>{projects[index].description}</p>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="gallery row">{Images}</div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Project;
