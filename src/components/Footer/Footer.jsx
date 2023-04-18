import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
          Facciamo qualcosa <br />
          di straordinario insieme
          </span>
          <span className="primaryText">
            Inizia dicendo <a href="mailto:francesco.svara@gmail.com">Ciao</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Informazioni</span>
            <p>00000 Roma, Italia</p>
          </div>
          <ul className={css.menu}>
            <li>Servizi</li>
            <li>Lavori</li>
            <li>Note</li>
            <li>Esperienze</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
