

const communityData = {
  events: [
    {
      name: "Eastern Maine Sportsmen’s Show",
      date: "2025-03-14",
      location: " University of Maine at Orono (UMO)",
      description: "an annual rite of spring for Sportsmen and Sportswomen in Eastern Maine and beyond for more than 80 years, featuring Vendors, Exhibitors, and Educational Seminars.",
      link: "https://www.pccamaine.org/pcca-events/eastern-maine-sportsmen-show/",
    },
    {
      name: "State of Maine Sportsman’s Show",
      date: "2025-03-28",
      location: "Augusta Civic Center",
      description: "Each spring, The Maine Sportsman magazine, in partnership with Sportsman’s Alliance of Maine, hosts the State of Maine Sportsman’s Show ",
      link: "https://www.mainesportsman.com/sportsmans-show/",
    },

    {
      name: "2025 New Hampshire Outdoor Expo",
      date: "2025-03-07",
      location: "Hampshire Dome- Milford, NH",
      description: "Come experience the latest innovations in freshwater, saltwater fishing, hunting, camping, kayak and boating. ",
      link: "https://onthewater.com/2025-sportsmens-shows-and-fishing-events#:~:text=The%20Raddison%20Hotel%20Hauppague%2D%20Hauppauge,New%20Jersey",
    },
  ],
  socialMediaGroups: [
    {
      platform: "Facebook",
      name: "Texas Parks and Wildlife ",
      link: "https://www.facebook.com/texasparksandwildlife/",
      description: "Join the community of passionate anglers sharing tips and stories.",
    },
    {
      platform: "Facebook",
      name: "Fishing Addicts",
      link: "https://www.facebook.com/groups/1842385429312520/",
      description: "A group for discussions on catch and release fishing practices.",
    },

    {
      platform: "Reddit",
      name: "r/Fishing",
      link: "https://www.reddit.com/r/Fishing/",
      description: "A group for discussions on catch and release fishing practices.",
    },
    
  ],
};

function Community() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Upcoming Fishing Events</h2>
          <div className="space-y-6">
            {communityData.events.map((event, index) => (
              <div key={index} className="dark:bg-neutral-900 bg-sky-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-pink-500 font-semibold">{event.name}</h3>
                <p className="text-sm dark:text-yellow-500 text-green-500">{event.date} - {event.location}</p>
                <p className="mt-2 dark:text-gray-300">{event.description}</p>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Register Now
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Groups */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Join Our Social Media Groups</h2>
          <div className="space-y-6">
            {communityData.socialMediaGroups.map((group, index) => (
              <div key={index} className="dark:bg-neutral-900 bg-sky-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-rose-500 font-semibold">{group.name}</h3>
                <p className="text-sm dark:text-gray-300">{group.description}</p>
                <a href={group.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                    Join Now
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
