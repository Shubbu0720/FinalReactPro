import React, { useState } from 'react'
import './about.css';
import img1 from '../../Assets/about/img5.jpg'
import { useCollapse } from 'react-collapsed';
const About = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
     <h3 className='heading'>
        About<span> Us</span>
      </h3>
      <section className='about'>
            <div className='about1'>
              <img src={img1} alt="about-food" />
            </div>
            <div className='content'>
            <h4>What Makes Our Food Special?</h4>
            <p>A nice balance of sweet, salty, sour, bitter, bland, and umami flavors IMHO.
              Adults can cultivate their palates to appreciate all of these flavors as your different taste buds will develop the more you use them.
              All foods will taste better this way.</p>
            <p {...getCollapseProps()}>it's shaped into patties and fried until golden brown. What makes shami kebabs tasty is the mix of spices like cumin,
              coriander, and garam masala, giving them a flavourful taste.
              Lentils add texture and make them healthier.</p>
            <button {...getToggleProps({ onClick: () => setExpanded((prevExpanded) => !prevExpanded), })} type="submit" className='btn1'>{isExpanded ? "Read Less.." : "Read More.."}</button>
          </div>
      </section>
    </>
  )
}

export default About