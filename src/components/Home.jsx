import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import {
  MdMobileScreenShare,
  MdOutlineDesktopMac,
  MdOutlinePeople,
  MdFeedback,
  MdOutlineLocalFireDepartment,
  MdWaterDrop,
} from "react-icons/md";
import { HiCurrencyRupee, HiOutlineNewspaper } from "react-icons/hi";
import { AiTwotoneSound, AiOutlineBulb } from "react-icons/ai";
import { FaBlogger, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  const item = [
    {
      icon: <MdMobileScreenShare />,
      text: "Prepaid Mobile Charge",
    },
    {
      icon: <MdOutlineDesktopMac />,
      text: "DTH Recharge",
    },
    {
      icon: <HiCurrencyRupee />,
      text: "Loans",
    },
    {
      icon: <AiTwotoneSound />,
      text: "Promotion",
    },
    {
      icon: <HiOutlineNewspaper />,
      text: "News",
    },
    {
      icon: <FaBlogger />,
      text: "Blog",
    },
    {
      icon: <MdOutlinePeople />,
      text: "Jobs",
    },
    {
      icon: <MdFeedback />,
      text: "Anonymous Feedback",
    },
    {
      icon: <MdOutlineLocalFireDepartment />,
      text: "Gas Booking",
    },
    {
      icon: <AiOutlineBulb />,
      text: "Electricity Bill",
    },
    {
      icon: <MdWaterDrop />,
      text: "Water Bill",
    },
    {
      icon: <FaArrowAltCircleRight />,
      text: "See More",
    },
  ];
  return (
    <div className="home">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        className="slider"
      >
        <div>
          <img src={image1} alt="poster" />
        </div>
        <div>
          <img src={image2} alt="poster" />
        </div>
        <div>
          <img src={image3} alt="poster" />
        </div>
        <div>
          <img src={image4} alt="poster" />
        </div>
      </Carousel>
      <div className="item_container">
        {item.map((i, index) => (
          <Link>
            {i.icon}
            <p>{i.text}</p>
          </Link>
        ))}
      </div>

      <div className="services_provider">
        <h1>All Popular Services Providers</h1>
      </div>
      <div className="services">
        <h1>All Popular Services Providers</h1>
      </div>
    </div>
  );
};

export default Home;
