
import React from 'react';

export default function EducationalApproach({ teachersData }) {
  const { location } = teachersData;

  const getLocationText = () => {
    switch (location) {
      case 'online':
        return (
          <>
            <i className="fas fa-globe inline-block mr-2"></i>
            Online
          </>
        );
      case 'physical':
        return (
          <>
            <i className="fas fa-map-marker-alt inline-block mr-2"></i>
            Physical
          </>
        );
      case 'both':
        return (
          <>
            <i className="fas fa-globe inline-block mr-2"></i>
            Online
            <i className="fas fa-map-marker-alt inline-block mx-2"></i>
            Physical
          </>
        );
      default:
        return 'Location Not Specified';
    }
  };

  return (
    <>
      <section className="">
        <h6 className="heading font-semibold mt-4 mb-4 uppercase">Educational Approach</h6>
        <div className="flex flex-col my-2">
          <p className="text-left my-3 text-gray-500">{getLocationText()}</p>
          <hr />
        </div>
      </section>
    </>
  );
}
