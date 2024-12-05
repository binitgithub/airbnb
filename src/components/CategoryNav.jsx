import React from 'react';
import { HomeIcon, EyeIcon, BuildingOfficeIcon, SunIcon, MapPinIcon, StarIcon, BeakerIcon, UserGroupIcon, CakeIcon, TrophyIcon, GlobeAltIcon } from '@heroicons/react/24/solid'; // Ensure you're using the correct Heroicons version

const categories = [
  { name: 'Icons', icon: StarIcon },
  { name: 'Amazing pools', icon: BeakerIcon },  // Replaced PoolIcon with BeakerIcon
  { name: 'Farms', icon: UserGroupIcon },  // Replaced FarmIcon with UserGroupIcon
  { name: 'Amazing views', icon: EyeIcon },
  { name: 'Historical homes', icon: BuildingOfficeIcon }, // Replaced with BuildingOfficeIcon
  { name: 'Tropical', icon: SunIcon },
  { name: 'Rooms', icon: HomeIcon },
  { name: 'OMG!', icon: StarIcon },
  { name: 'Cabins', icon: MapPinIcon },
  { name: 'Treehouses', icon: MapPinIcon },  // Same icon for simplicity
  { name: 'Luxe', icon: CakeIcon },
  { name: 'Beach', icon: TrophyIcon },
  { name: 'Countryside', icon: GlobeAltIcon },  // Replaced TreeIcon with GlobeAltIcon
];

const CategoryNav = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 border-b">
      <div className="flex items-center justify-start space-x-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center cursor-pointer hover:text-gray-900 transition">
            <category.icon className="h-8 w-8 text-gray-500" />
            <span className="text-gray-700 mt-1">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
