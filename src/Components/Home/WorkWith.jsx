import React from 'react';
import './WorkWith.css';
import './click.css';

import brand1 from '../../assets/Home/2 Work With/1.png';
import brand2 from '../../assets/Home/2 Work With/2.png';
import brand3 from '../../assets/Home/2 Work With/3.png';
import brand4 from '../../assets/Home/2 Work With/4.png';
import brand5 from '../../assets/Home/2 Work With/5.png';
import brand6 from '../../assets/Home/2 Work With/6.png';
import brand7 from '../../assets/Home/2 Work With/7.png';
import brand8 from '../../assets/Home/2 Work With/2.jpg';
import brand9 from '../../assets/Home/2 Work With/23.png';
import brand10 from '../../assets/Home/2 Work With/25.png';
import brand11 from '../../assets/Home/2 Work With/21.png';
import brand12 from '../../assets/Home/2 Work With/12.png';
import brand13 from '../../assets/Home/2 Work With/13.png';
import brand14 from '../../assets/Home/2 Work With/14.png';
import brand15 from '../../assets/Home/2 Work With/15.png';
import brand16 from '../../assets/Home/2 Work With/16.png';
import brand17 from '../../assets/Home/2 Work With/17.png';
import brand18 from '../../assets/Home/2 Work With/22.png';
import brand19 from '../../assets/Home/2 Work With/19.png';
import brand20 from '../../assets/Home/2 Work With/24.jpg';
import brand21 from '../../assets/Home/2 Work With/5.jpg';
import brand22 from '../../assets/Home/2 Work With/26.png';
import brand23 from '../../assets/Home/2 Work With/27.png';
import brand24 from '../../assets/Home/2 Work With/28.png';
import brand25 from '../../assets/Home/2 Work With/29.png';

import { ImOpt } from 'react-icons/im';
import { Link } from 'react-router-dom';
const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15, brand16, brand17, brand18, brand19, brand20, brand21, brand22, brand23, brand24, brand25];

const WorkWith = () => {
  return (
    <main>

      <section className="w-screen bg-gradient-to-t from-[#19BDE880] to-white py-16 overflow-hidden mt-20 ">
        <div className=" mx-auto px-4 text-center">
          <h1 className="text-[#19BDE8] font-semibold text-2xl md:text-4xl mb-12">
            Who We Work With
          </h1>

          <div className="logo-marquee-wrapper">
            <div className="logo-marquee-track">
              {brands.concat(brands).map((brand, index) => (
                <img
                  key={index}
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className={`logo-img ${index % brands.length === brands.length - 1 ? 'rounded-full object-cover' : ''
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center'>
        <Link to='/insights'>
         <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px' ,marginBottom: '20px'}}>
            <button className="ui-btn"><span>Explore More</span></button>
         </div>
        </Link>
      </section>

    </main>
  );
};

export default WorkWith;
