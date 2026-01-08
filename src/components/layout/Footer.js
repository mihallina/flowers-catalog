import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="footer-info">
          <div className="footer-infoDiv footer-contacts">
            <h3>Контакты</h3>
            <p>ООО "flowers"</p>
            <p>тел.: 123 4 567(vel, мтс)</p>
          </div>
          <div className="footer-infoDiv footer-workTime">
            <h3>Время работы</h3>
            <p>Ежедневно с 9:00 до 20:00</p>
          </div>
          <div className="footer-infoDiv footer-addresses">
            <h3>Адреса</h3>
            <p>для писем: 1234567, г.Могилев а/я 100</p>
            <p>e-mail: example.com@mail.ru</p>
            <p>юридический адрес: 123456, г.Могилев, ул.Пример д.100</p>
          </div>
        </div>
        <div className="footer-socialMedia">
            <a href=""><img src='/images/youtube.svg' alt="youtube" /></a>
            <a href=""><img src='/images/facebook.svg' alt="facebook" /></a>
            <a href=""><img src='/images/instagram.svg' alt="instagram" /></a>
            <a href=""><img src='/images/odnoklasniki.svg' alt="odnoklasniki" /></a>
            <a href=""><img src='/images/tiktok.svg' alt="tiktok" /></a>
            <a href=""><img src='/images/vk.svg' alt="vk" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
