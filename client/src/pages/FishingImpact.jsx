import { motion } from "framer-motion";

const articles = [
  {
    type: "Article",
    title: "The Impact of Overfishing on Global Fisheries",
    description:
      "Learn how overfishing is depleting global fish stocks and what steps can be taken to mitigate the impact.",
    link: "https://www.worldwildlife.org/threats/overfishing",
    image:
      "https://files.worldwildlife.org/wwfcmsprod/images/Fishing_Net__Tuna_Ecuador/story_full_width/wicb46eps_Medium_WW290693.jpg",
  },

  {
    type: "Article",
    title: "Sustainable Fishing Practices to Protect Marine Life",
    description:
      "Explore methods and practices that promote sustainability in the fishing industry.",
    link: "https://www.msc.org/what-we-are-doing/our-approach/what-is-sustainable-fishing",
    image:
      "https://www.msc.org/images/default-source/msc-english/content-banner/content-page-body-images-912-x-513/rs3519_istock_000077327811_copy.tmb-large1920.jpg?Status=Master&sfvrsn=e146667_1",
  },

  {
    type: "Article",
    title: "Sustainable fish to eat",
    description:
      "Learn how overfishing is depleting global fish stocks and what steps can be taken to mitigate the impact.",
    link: "https://www.msc.org/what-you-can-do/eat-sustainable-seafood/fish-to-eat",
    image:
      "https://files.worldwildlife.org/wwfcmsprod/images/Fishing_Net__Tuna_Ecuador/story_full_width/wicb46eps_Medium_WW290693.jpg",
  },

  {
    type: "Article",
    title: "Climate change and fishing",
    description:
      "Learn how Changes in water temperature and in the distribution of fish stocks can make it more difficult to fish sustainably",
    link: "https://www.msc.org/what-we-are-doing/oceans-at-risk/climate-change-and-fishing",
    image:
      "https://www.msc.org/images/default-source/msc-english/content-banner/content-page-body-images-912-x-513/rs17766_austral-fisheries-copy-912.tmb-labelhome.jpg?Status=Master&sfvrsn=f2eee852_1",
  },

  {
    type: "Video",
    title: "Overfishing: How Long Until We Run Out of Fish",
    description:
      "Learn how Changes in water temperature and in the distribution of fish stocks can make it more difficult to fish sustainably",
    link: "https://youtu.be/eoc_pu9Tt2Y?si=IfOlDRGNtGkodHE9",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaGHdk5kwkn2KFR-3snLfjaMraAtWp3LswA&s",
  },

  {
    type: "Video",
    title: "Ocean Alert: Overfishing",
    description:
      "This educational video dives into the impacts of overfishing on marine ecosystems, explains how it affects fish populations",
    link: "https://youtu.be/eVJ7Prt5OdA?si=C-rIkI2_wiquk7S1",
    image:
      "https://www.msc.org/images/default-source/msc-english/content-banner/content-page-body-images-912-x-513/rs17766_austral-fisheries-copy-912.tmb-labelhome.jpg?Status=Master&sfvrsn=f2eee852_1",
  },

  {
    type: "Video",
    title: "How to Stop Overfishing",
    description:
      "This educational video dives into the impacts of overfishing on marine ecosystems, explains how it affects fish populations",
    link: "https://youtu.be/0wpUg9cntME?si=YesCV4qUOjIgXgZr",
    image:
      "https://safety4sea.com/wp-content/uploads/2017/04/fishing-gear-under-water-e1519639287140.jpg",
  },

  {
    type: "Video",
    title: "Will the ocean ever run out of fish?",
    description:
      "When most people think of fishing, we imagine relaxing in a boat and patiently reeling in the day’s catch",
    link: "https://youtu.be/WNdR808jMSA?si=p1-sa8nG5iy9jNHp",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c93cd63f4e5316451a54aa3/321da595-7855-4163-b872-e53b614d4aae/arlo.trawling.jpg",
  },
];

function FishingImpact() {
  const animationSettings = {
    initial: { x: -200, opacity: 0 }, // Start off-screen to the left and invisible
    animate: { x: 0, opacity: 1 }, // Move into view and become visible
    transition: { type: "spring", stiffness: 50 }, // Spring animation
  };

  return (
    <>
    <h1 className="text-center md:text-5xl text-pink-500 text-2xl mb-12 font-bold mt-5">
    Explore Resources on Sustainable Fishing
    </h1>
  
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-cyan-400">Informative Articles</h2>
      <p className="dark:text-gray-400 italic">
        Learn about the impact of overfishing and sustainable practices.
      </p>
    </div>
    
    <motion.div className="flex justify-evenly flex-wrap gap-y-6 mt-5 mb-5 gap-x-2 ">
      {articles
        .filter((article) => article.type === "Article")
        .map((article, index) => (
          <motion.div
            key={index}
            {...animationSettings}
            transition={{
              ...animationSettings.transition,
              delay: 0.6 + index * 0.1,
            }}
            className="card dark:bg-neutral-900 bg-gray-200 w-80 hover:shadow-lg hover:shadow-cyan-400"
          >
            <figure className="px-10 pt-10">
              <img src={article.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h1 className="card-title font-bold text-sky-700">{article.title}</h1>
              <p className="font-mono dark:text-gray-400">{article.description}</p>
              <div className="card-actions">
                <a href={article.link} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary">Learn More</button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
    </motion.div>
  
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-cyan-400">Engaging Videos</h2>
      <p className="text-gray-400 italic">
        Watch videos about overfishing and sustainable practices.
      </p>
    </div>
  
    <motion.div className="flex justify-evenly flex-wrap gap-y-6 mt-5 mb-5 gap-x-2 ">
      {articles
        .filter((article) => article.type === "Video")
        .map((article, index) => (
          <motion.div
            key={index}
            {...animationSettings}
            transition={{
              ...animationSettings.transition,
              delay: 0.6 + index * 0.1,
            }}
            className="card bg-gray-200 dark:bg-neutral-900 w-80 hover:shadow-lg hover:shadow-cyan-400"
          >
            <figure className="px-10 pt-10">
              <img src={article.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h1 className="card-title font-bold text-sky-600">{article.title}</h1>
              <p className="font-mono dark:text-gray-400">{article.description}</p>
              <div className="card-actions">
                <a href={article.link} target="_blank" rel="noreferrer">
                  <button className="btn btn-secondary">Watch Now</button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
    </motion.div>
  </>
  
  );
}

export default FishingImpact;
