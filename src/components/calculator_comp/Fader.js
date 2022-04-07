// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import "./Calculator.css";
// import img1 from "./views_images/pic1.jpg";
// import img2 from "./views_images/pic2.jpg";
// import img3 from "./views_images/pic3.jpg";
// import img4 from "./views_images/pic4.jpg";
// import img5 from "./views_images/pic5.jpg";
// import img6 from "./views_images/pic6.jpg";
// import img7 from "./views_images/pic7.jpg";

// const Fader = ({ text }) => {
//   const [fadeProp, setFadeProp] = useState({
//     fade: "fade-in",
//   });

//   const arrImgs = [img1, img2, img3, img4, img5, img6, img7];
//   const [image, setImage] = useState(img1);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((second) => (second === 6 ? 0 : second + 1));
//     }, 3000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   useEffect(() => {
//     const timeOut = setInterval(() => {
//       if (fadeProp.fade === "fade-in") {
//         setFadeProp({
//           fade: "fade-out",
//         });
//       } else {
//         setFadeProp({
//           fade: "fade-in",
//         });
//       }
//     }, 2000);
//     return () => clearInterval(timeOut);
//   }, [fadeProp]);

//   return (
//     <>
//       <img
//         className={fadeProp.fade}
//         src={arrImgs[seconds]}
//         width="500vw"
//         height="300vh"
//       />
//     </>
//   );
// };

// Fader.defaultProps = {
//   text: "Hello word",
// };

// Fader.prototype = {
//   text: PropTypes.string,
// };

// export default Fader;
