import TitleDev from "../TitleDev/TitleDev";
import TitleUlBtn from "../TitleUlBtn/TitleUlBtn";
import Section from "../Section/Section";
import "./Card.css"


const Card = ({section, titleDev, titleUlBtn}) => {
  return (
    <>
      {section &&(
      <Section
        imageUrl = {section.imageUrl}
        imageAlt = {section.imageAlt}
        title = {section.title}
        desc = {section.desc}
        flex = {section.flex}
        reverse = {section.reverse}
        testName={section.testName}
      />)}

      {titleDev &&(
      <TitleDev
        title = {titleDev.title}
        div1 = {titleDev.div1}
        div2 = {titleDev.div2}
      />)}

      {titleUlBtn &&(
      <TitleUlBtn
        title = {titleUlBtn.title}
        ul = {titleUlBtn.ul}
        btn = {titleUlBtn.btn}
      />)}
    </>
  );
}

export default Card;