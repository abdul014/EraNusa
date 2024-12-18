import React from 'react';

/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */

import PropTypes from 'prop-types';

const TeamCard = ({ imgSrc, mainLogo, roleLogo, rightLogo, name, position, company, pastCompanies }) => {
    return (
      <div className="relative p-4 rounded-lg bg-white shadow-lg flex flex-col items-center">
        {/* Logo Utama di Kiri Atas */}
        <div className="absolute top-2 left-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-20">
          <img src={mainLogo} alt="Main Logo" className="w-8 h-8 object-contain" />
        </div>
  
        {/* Foto Profil */}
        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-900 relative">
          {/* Gambar Profil */}
          <img
            src={imgSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
  
          {/* Logo Kategori Profesi di Pojok Kiri Bawah */}
            <div className="absolute bottom-2 left-2 w-8 h-8 flex items-center justify-center shadow-md z-10">
                <img src={roleLogo} alt="Role Logo" className="w-full h-full object-contain" />
            </div>
            {/* Logo Tambahan di Pojok Kanan Bawah */}
            <div className="absolute bottom-2 right-2 flex gap-2 items-center z-10">
                {rightLogo.map((logo, index) => (
                <div key={index} className="w-6 h-6">
                    <img src={logo} alt={`Right Logo ${index}`} className="w-full h-full object-contain" />
                </div>
                ))}
            </div>
        </div>
  
        {/* Informasi */}
        <div className="text-center">
          <h3 className="font-bold text-lg text-black">{name}</h3>
          <p className="text-zinc-600">{position}</p>
          <p className="text-zinc-400">{company}</p>
  
          {/* Perusahaan Sebelumnya */}
          <div className="mt-2 flex justify-center gap-2 flex-wrap">
            {pastCompanies.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company Logo"
                className="w-8 h-8 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  TeamCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    mainLogo: PropTypes.string.isRequired,
    roleLogo: PropTypes.string.isRequired,
    rightLogo: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    pastCompanies: PropTypes.array.isRequired,
  };
  
  export default TeamCard;