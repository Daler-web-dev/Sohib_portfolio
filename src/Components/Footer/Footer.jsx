import React from 'react'
import faceImg from '../../assets/img/sticker.png'
import avatar from '../../assets/img/avatar.png'
import instagramm from '../../assets/icons/instagramm.png'
import telegramm from '../../assets/icons/telegramm.png'
import behance from '../../assets/icons/behance.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="def-width">
                <div className="top-of-footer">
                    <div className="about-me">
                        <h2>
                            Men haqimda
                            <img src={faceImg} alt="" />
                        </h2>
                        <p>
                            Ismim Sohib Abdurahmon. Soham Motion dizayner. Ishdan
                            tashqari vaqtlarim soham bo'yicha yangiliklarni tahlil
                            qilishni xo'sh kuraman. Musiqa jonu-dilim.
                        </p>
                        <p>
                            1 yildan buyon "Wepro" IT-maktabida o'quvchilarga dars berib
                            kelmoqdaman, shu bilan birgalikda Motion dizayn bo'yicha
                            "Madad" studiosidan buyurtmalar qabul qilmoqdaman.
                        </p>
                        <div className="social-media-bllock">
                            <span>Ishlarimni kuzatib boring:</span>
                            <div className="icons">
                                <img src={instagramm} alt="" />
                                <img src={telegramm} alt="" />
                                <img src={behance} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="avatar-block">
                        <img src={avatar} alt="" />
                    </div>
                </div>
                <div className="bottom-of-footer">
                    <h2>Keling, zamonaviy video
                        lavhalar yarataylik!</h2>
                    <div className="reach-to">
                        <span>
                            Email: 
                        </span>
                        <a href="#">sohib.19950772@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
