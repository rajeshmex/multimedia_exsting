import React from "react";
import { taj } from "../../assets/Index";
import Marquee from "react-fast-marquee";

const HomeFifth = () => {
  const data = [
    {
      image: taj,
      alt: "taj",
      text: "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, pariatur. Quas porro, natus vel perferendis, mollitia rerum dolore commodi sed temporibus ratione saepe atque autem voluptatum consectetur, sequi eius. Voluptate?",
    },
    {
      image: taj,
      alt: "taj",
      text: "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, pariatur. Quas porro, natus vel perferendis, mollitia rerum dolore commodi sed temporibus ratione saepe atque autem voluptatum consectetur, sequi eius. Voluptate?",
    },
    {
      image: taj,
      alt: "taj",
      text: "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, pariatur. Quas porro, natus vel perferendis, mollitia rerum dolore commodi sed temporibus ratione saepe atque autem voluptatum consectetur, sequi eius. Voluptate?",
    },
    {
      image: taj,
      alt: "taj",
      text: "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, pariatur. Quas porro, natus vel perferendis, mollitia rerum dolore commodi sed temporibus ratione saepe atque autem voluptatum consectetur, sequi eius. Voluptate?",
    },
    {
      image: taj,
      alt: "taj",
      text: "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, pariatur. Quas porro, natus vel perferendis, mollitia rerum dolore commodi sed temporibus ratione saepe atque autem voluptatum consectetur, sequi eius. Voluptate?",
    },
  ];

  return (
    <div className="container-fluid mt-6">
      <div className="row">
        <Marquee speed={40} pauseOnHover={true}>
          {data.map((item, index) => (
            <div key={index} className="p-3" style={{ width: "400px" }}>
              <div className="card">
                <img src={item.image} alt={item.alt} className="card-image" />
                <p className="card-text p-2">{item.text}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HomeFifth;
