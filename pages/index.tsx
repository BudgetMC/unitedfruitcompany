import type { NextPage } from "next";
import Head from "next/head";
import TypewriterScript from "../components/TypewriterScript";
import HomeGrid from "../components/HomeGrid";
import Hero, { Side } from "../components/Hero";
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>United Fruit Company</title>
        <meta
          name="description"
          content="The United Fruit Company, 1899-1970."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.navbarPlaceholder} />
          <h1 className={styles.title}>
            <TypewriterScript
              text={"United Fruit Company"}
              averageDuration={2000}
            />
          </h1>

          <p>
            <TypewriterScript text={"History Project"} averageDuration={1500} />
          </p>

          <HomeGrid />
        </div>
      </main>

      <Hero
        header={'"A Great Fruit Combine"'}
        text="Founded in 1899, the United Fruit Company would go on to be one of the most influential corporations in the twentieth century, and a pioneer of modern marketing techniques."
        picturePath="https://unitedfruitcompany.files.wordpress.com/2020/06/ufc-announcement.png?w=600"
        pictureAltText="Newspaper announcement of the founding of the United Fruit Company"
        side={Side.Left}
      />

      <Hero
        header="Timeline"
        text={
          "View our interactive timeline documenting the history of the United Fruit Company from its predecessors to its dissolution."
        }
        picturePath="https://unitedfruitcompany.files.wordpress.com/2021/12/screenshot-2021-12-10-at-16-26-07-timeline-united-fruit-company.png?w=800"
        pictureAltText="Map of the United States, Mexico, and Central America published by the United Fruit Company."
        side={Side.Right}
        link="/timeline"
      />

      <Hero
        header="In the Arts"
        text="The United Fruit Company has inspired numerous writers over the past hundred years. Gabriel García Márquez (pictured), Thomas Pynchon, O. Henry, Pablo Neruda, and many more have included references to the company in their stories."
        picturePath="https://unitedfruitcompany.files.wordpress.com/2021/11/gabriel-garcia-marquez.jpg?w=600"
        pictureAltText="Portrait of Gabriel García Márquez"
        side={Side.Left}
      />
    </div>
  );
};

export default Home;
