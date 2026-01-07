import React from "react";
import "./Footer.css";
import youtube from '../../images/youtube.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import odnoklasniki from '../../images/odnoklasniki.svg'
import tiktok from '../../images/tiktok.svg'
import vk from '../../images/vk.svg'

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
            <a href=""><img src={youtube} alt="youtube" /></a>
            <a href=""><img src={facebook} alt="facebook" /></a>
            <a href=""><img src={instagram} alt="instagram" /></a>
            <a href=""><img src={odnoklasniki} alt="odnoklasniki" /></a>
            <a href=""><img src={tiktok} alt="tiktok" /></a>
            <a href=""><img src={vk} alt="vk" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
