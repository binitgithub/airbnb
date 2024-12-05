import React from 'react';

const experiences = [
  {
    title: "Stay in Prince's Purple Rain house",
    host: "Hosted by Wendy and Lisa",
    status: "Coming September",
    imgSrc: "assets/imgone.webp",
  },
  {
    title: 'Join a living room session with Doja',
    host: 'Hosted by Doja Cat',
    status: 'Coming October',
    imgSrc: 'assets/imgtwo.webp',
  },
  {
    title: 'Sleepover at Polly Pocket’s Compact',
    host: 'Hosted by Polly Pocket',
    status: 'Sold out',
    imgSrc: 'assets/imgtwo.webp',
  },
  {
    title: 'Playdate at Polly Pocket’s Compact',
    host: 'Hosted by Polly Pocket',
    status: 'Sold out',
    imgSrc: 'assets/imgtwo.webp',
  },
  {
    title: 'Go VIP with Kevin Hart',
    host: 'Hosted by Kevin Hart',
    status: 'Sold out',
    imgSrc: 'assets/imgtwo.webp',
  },
  {
    title: 'Train at the X-Mansion',
    host: 'Hosted by Jubilee',
    status: 'Sold out',
    imgSrc: 'assets/imgtwo.webp',
  },
];

const pastExperiences = [
  {
    title: 'Live like Bollywood star Janhvi Kapoor',
    imgSrc: 'assets/imgtwo.webp',
  },
  {
    title: 'Open the Olympic Games at Musée d’Orsay',
    imgSrc: 'assets/imgtwo.webp',
  },
  {
    title: 'Wake up in the Musée d’Orsay',
    imgSrc: 'assets/imgtwo.webp',
  },
  {
    title: 'Make core memories with Inside Out 2',
    imgSrc: 'assets/imgtwo.webp',
  },
  {
    title: 'Design your Incredibles Supersuit',
    imgSrc: 'assets/imgtwo.webp',
  },
  {
    title: 'Go on tour with Feid',
    imgSrc: 'assets/imgtwo.webp',
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <div className="relative group cursor-pointer">
      <img src={experience.imgSrc} alt={experience.title} className="rounded-lg w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{experience.title}</h3>
        <p className="text-sm">{experience.host}</p>
        <p className="text-sm">{experience.status}</p>
      </div>
    </div>
  );
};

const PastExperienceCard = ({ pastExperience }) => {
  return (
    <div className="relative group cursor-pointer">
      <img src={pastExperience.imgSrc} alt={pastExperience.title} className="rounded-lg w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{pastExperience.title}</h3>
      </div>
    </div>
  );
};

const AirbnbComponent = () => {
  return (
    <div className="space-y-12">
      {/* Upcoming Experiences */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Upcoming Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>

      {/* Past Experiences */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Past Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastExperiences.map((pastExperience, index) => (
            <PastExperienceCard key={index} pastExperience={pastExperience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirbnbComponent;
