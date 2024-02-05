import React from "react";
import Vector from "./asset/Vector.png";
import telephone from "./asset/telephone.png";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="column-footer">
        <div className="container">
          <img src={Vector} alt="Image Alt Text" className="icon" />
          <p className="text">ศูนย์รักษ์พุง โรงพยาบาลจุฬาลงกรณ์</p>
        </div>
        <p className="address-text">อาคาร ส.ธ. ชั้น 12 เลขที่ 1873 ถนนพระราม 4</p>
        <p className="address-text">แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร</p>
      </div>
      <div className="column-footer">
        <div className="row">
          <div className="container2">
            <img src={telephone} alt="Image Alt Text" className="iconTel" />
            <p className="text2">โทรศัพท์</p>
            <div className="row">
              <p className="tel">02-256-4000 ต่อ 71205</p>
            </div>
          </div>
          <p className="openTime">
            ทุกวันอังคาร- ศุกร์ เวลา 8.30 - 15.30 น. (ยกเว้นวันหยุดราชการ)
          </p>
        </div>
        <div className="row">
          <div className="container">
            <p className="text">อีเมล</p>
            <div className="row">
              <p className="email">contact@chulabmi.go.th</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
