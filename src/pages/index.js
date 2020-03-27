import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import imgIndex from "../images/bg/tjs-sports-bar-hawaii.jpg"
import Menu from "../components/Menu"
import Intro from "../components/Intro"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="TJ's Sports Bar is located on the corner of Kapiolani and South Street in Honolulu, Hawaii. Upbeat sports bar with billiard tables, darts, and jukebox, with an eclectic pub grub menu.`,
      author: `@restaurantmarketinghawaii"
      keywords={[
        `Honolulu Bar`,
        `Hawaii Restaurant`,
        `Hawaii Bar Food`,
        `Honolulu Takeout`,
        `Honolulu Pub Food`,
        `Honolulu Bar Food`,
      ]}
    />
    <HeaderIndex img={imgIndex}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner subtitle="TJ's Sports Bar is located on the corner of Kapiolani and South Street in Honolulu, Hawaii. We're an upbeat sports bar with  billiard tables, darts, a jukebox, and eclectic pub grub menu.">
          <AniLink>
            <Button className="upserve-olo-opener">ORDER TAKEOUT</Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section style={{ marginTop: "4rem", marginBottom: "1rem" }}>
      <Intro
        heading="NEW LUNCH MENU"
        subheading="We are open for takeout or delivery. Please call (808) 545-2424. Free delivery is available: Puncbowl to Pensacola and Beretania to Ala Moana."
      />
    </Section>
    <Section id="menu">
      <Menu
        itemName="Tofu Salad"
        itemDescription="watercress, pulled salmon, red onions, tomato, tofu, with house dressing"
        price="8.00"
      />
      <Menu
        itemName="Fried Saimin"
        itemDescription="yakisoba, spam, kamaboko"
        price="8.00"
      />
      <Menu
        itemName="Fried Rice"
        itemDescription="bacon, onion, carrot, eggs. (Garlic $7, Kim Chee $8, Lup Chong $9, Shrimp $10)"
        price="6.00"
      />
      <Menu
        itemName="Ahi Poke Bowl"
        itemDescription="fresh ahi, white rice, furikake, onion, limu, green onion, soy sauce, sesame seeds"
        price="10.00"
      />
      <Menu
        itemName="Spicy Ahi Bowl"
        itemDescription="fresh ahi, white rice, furikake, spicy aioli, green onion, nori sheets"
        price="10.00"
      />
      <Menu
        itemName="Cheeseburger"
        itemDescription="all beef patty, cheddar cheese, onion, lettuce, tomato, burger spread, bun, crinkle fries"
        price="10.00"
      />
      <Menu
        itemName="BLT"
        itemDescription="white bread, bacon, lettuce, tomato, crinkle fries"
        price="6.00"
      />
      <Menu
        itemName="Spam Egg"
        itemDescription="white bead, crinkle fries"
        price="6.00"
      />
      <Menu
        itemName="Tuna Melt"
        itemDescription="tuna, mayo, cheddar cheese, crinkle fries"
        price="6.00"
      />
      <Menu
        itemName="Miso Ramen"
        itemDescription="fried shrimp, fish cake, green onions"
        price="8.00"
      />
    </Section>
    <Section style={{ marginTop: "4rem", marginBottom: "1rem" }}>
      <Intro
        heading="plate lunch menu"
        subheading="Served with white rice and salad. We are open for takeout or delivery. Please call (808) 545-2424. Free delivery is available: Puncbowl to Pensacola and Beretania to Ala Moana."
      />
    </Section>
    <Section id="menu">
      <Menu
        itemName="new york steak"
        itemDescription="grilled, sauteed mushrooms and onions, choice of temperature"
        price="10.00"
      />
      <Menu
        itemName="chopped steak"
        itemDescription="chuck steak, onion, carrot, celery, bell peppers, sweet soy, oyster sauce"
        price="8.00"
      />
      <Menu
        itemName="pork chops"
        itemDescription="lightly battered, deep fried"
        price="10.00"
      />
      <Menu
        itemName="spicy pork"
        itemDescription="smoked pork, sauteed onion, chili pepper"
        price="10.00"
      />
      <Menu
        itemName="kalbi"
        itemDescription="bone-in, house marinades"
        price="10.00"
      />
      <Menu
        itemName="korean chicken"
        itemDescription="lightly battered, sweet soy, sesame, chili"
        price="8.00"
      />
      <Menu
        itemName="garlic chicken"
        itemDescription="lightly battered, sweet soy, garlic, furikake"
        price="8.00"
      />
      <Menu
        itemName="fried chicken"
        itemDescription="chopped, boneless, skin-on"
        price="8.00"
      />
      <Menu
        itemName="wing zings"
        itemDescription="mild spicy chicken wings, deep fried, ranch"
        price="8.00"
      />
      <Menu
        itemName="furikake ahi"
        itemDescription="panko furikake crusted, wasabe aioli"
        price="10.00"
      />
      <Menu
        itemName="blackened ahi"
        itemDescription="rolled on blackened seasoning, sashimi style, sweet soy dijon sauce"
        price="10.00"
      />
      <Menu
        itemName="ahi belly"
        itemDescription="deep fried, lightly battered, ponzu"
        price="10.00"
      />
      <Menu
        itemName="steamed fish"
        itemDescription="basa, sesame, ginger, garlic, cilantro, soy"
        price="8.00"
      />
      <Menu
        itemName="Salt Pepper Shrimp"
        itemDescription="peeled, garlic, green onions"
        price="10.00"
      />
      <Menu
        itemName="calamari"
        itemDescription="buttermilk, battered"
        price="10.00"
      />
    </Section>
    <Section style={{ marginTop: "4rem", marginBottom: "1rem" }}>
      <Intro heading="contact us" />
    </Section>
    <Section id="information">
      <ContactForm />
    </Section>
    <Helmet>
      <script src={withPrefix("script.js")} type="text/javascript" />
    </Helmet>
  </Layout>
)

export default IndexPage
