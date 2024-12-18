import React from 'react';

/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


const OurTeam = () => {
    return (
      <section id="our-team" className="section">
        <div className="container">
          {/* Judul */}
          <h2 className="headline-2 text-center mb-6 reveal-up">Our Team</h2>
          <p className="text-zinc-400 text-center mb-10 reveal-up">
            Kenali tim profesional di balik Era Nusa Data. Bersama, kami berkomitmen menghadirkan keunggulan dan inovasi.
          </p>
  
          {/* Gambar Tim dengan Gradient */}
          <div className="flex justify-center reveal-up">
            <figure className="w-full max-w-[1200px] bg-gradient-to-t from-sky-400 via-sky-400/5 to-transparent rounded-[50px] lg:rounded-[60px] overflow-hidden">
              <img
                src="/images/team.png" /* Ganti dengan path gambar Anda */
                alt="Our Team"
                className="w-full"
              />
            </figure>
          </div>

         {/* Gambar Peta Sebaran */}
         <div className="flex justify-center reveal-up">
            <img
              src="/images/peta team.png" /* Ganti dengan path gambar peta Anda */
              alt="Peta Sebaran"
              className="w-full object-cover"
            />
        </div>
      </div>
    </section>
  );
};
  
  export default OurTeam;