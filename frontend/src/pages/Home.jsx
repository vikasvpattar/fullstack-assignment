import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <main className="main">
      <section className="hero">
        <div className="containerHero">
          <h2 className="">How can we help?</h2>
        </div>
        <form action="" className="searchWrapper">
          <input type="text" name="search" id="search" />
          <FaArrowRight className="icon" size={24} />
        </form>
      </section>
      <section className="cardsWrapper">
        {[1, 2, 3, 4, 5].map((data) => {
          return (
            <Cards
              key={data}
              title={"ksdhbckcbkhc"}
              description={"kcbkscbcsckscbkshchbscscbskcbkck"}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Home;
