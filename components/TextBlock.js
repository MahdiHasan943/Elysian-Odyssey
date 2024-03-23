import React from "react";
import Description from "./reusable/Description";
import Button from "./reusable/Button";

const TextBlock = () => {
  return (
    <div className=" py-16  ">
      <div className="flex flex-col h-[600px]  justify-center items-end">
        {/* <Description
          className={"py-4"}
          text={
            "Enter the vast expanse of Elysian Odyssey, a revolutionary MMORPG  experience that immerses players in a realm of cosmic warfare,  mythical beings, and the eternal struggle between light and darkness. This whitepaper serves as a guide to the intricacies of the Elysian universe, providing insights into its lore, gameplay mechanics, and the innovative economic ecosystem at its core."
          }
        />
        <Description
          className={"py-4"}
          text={
            "lysian Odyssey isn't just another MMORPG; it's a dynamic adventure where players can shape their destinies, forge alliances, and challenge formidable foes in a world brimming with mystery and wonder. Inspired by ancient legends and infused with modern gaming technology, our game offers an unparalleled journey for players seeking excitement, camaraderie, and rewards beyond compare."
          }
        />
        <Description
          className={"py-4"}
          text={
            "In Elysian Odyssey, players will embark on epic quests, engage in thrilling battles, and unravel the secrets of the cosmos alongside thousands of fellow adventurers. As they explore the vast landscapes and delve into treacherous dungeons, they'll encounter legendary creatures, forge powerful alliances, and leave their mark on the fabric of the universe."
          }
        />
        <Description
          text={
            "But Elysian Odyssey isn't just about adventure; it's also about opportunity. Within our game's economy, players have the chance to earn tangible rewards for their time and effort. By participating in various activities, completing quests, and contributing to the game world, players can earn ELY tokens—a valuable cryptocurrency that serves as both a measure of in-game wealth and a means of real-world compensation."
          }
        /> */}
      </div>{" "}
      <Button className="uppercase mt-[-120px] mx-auto text-center my-20 xl:my-20 text-[#fff] ">
        whitepaper
      </Button>
    </div>
  );
};

export default TextBlock;
