import React, { Component } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
// import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import Menu from "../components/Menu"
import Intro from "../components/Intro"
import Gallery from "../components/Gallery"

export default class IndexPage extends Component {
  render() {
    return (
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
        <HeaderIndex>
          <Section style={{ width: "100vw", alignItems: "center" }}>
            <Banner subtitle="TJ's Sports Bar is located on the corner of Kapiolani and South Street in Honolulu, Hawaii. We're an upbeat sports bar with  billiard tables, darts, a jukebox, and eclectic pub grub menu.">
              {/* <a href="https://app.upserve.com/s/tjs-bar-and-grill-honolulu">
                <Button className="upserve-olo-opener">ORDER TAKEOUT</Button>
              </a> */}
            </Banner>
          </Section>
        </HeaderIndex>
        <Gallery />
        <Section style={{ marginTop: "4rem", marginBottom: "1rem" }}>
          <Intro
            heading="REGULAR MENU"
            subheading="We are open for takeout or delivery. Please call (808) 545-2424. Free delivery is available: Puncbowl to Pensacola and Beretania to Ala Moana."
          />
          <Menu itemName="Tofu Watercress Salad" price="12.00" />
          <Menu
            itemName="Caesar Salad"
            itemDescription=" w/ chicken add $2"
            price="10.00"
          />
          <Menu
            itemName="Soybeans"
            itemDescription=" a/ garlic add $8"
            price="7.00"
          />
          <Menu itemName="Cold Tofu" price="6.00" />
          <Menu itemName="Sauteed Garlic Mushrooms" price="7.00" />
          <Menu itemName="Vegetable Platter" price="10.00" />
          <Menu
            itemName="Crinkle Cut Fries"
            itemDescription=" garlic $8, Furikake Garlic $9, Pepperoni $13"
            price="7.00"
          />
          <Menu itemName="Onion Rings" price="8.00" />
          <Menu itemName="Lumpia" price="10.00" />
          <Menu itemName="Fried Mandoo" price="10.00" />
          <Menu itemName="Shrimp Shumai" price="9.00" />
          <Menu itemName="Shoyu Vienna Sausages" price="8.00" />
          <Menu itemName="Deep Fried Mozzarella" price="10.00" />
          <Menu itemName="Deep Fried Zucchini" price="10.00" />
          <Menu
            itemName="Goteborg Bites"
            itemDescription="w/ Spicy Ahi $12"
            price="6.00"
          />
          <Menu itemName="Fried Saimin" price="10.00" />
          <Menu itemName="Hot Saimin (miso)	" price="8.00" />
          <Menu itemName="Bowl of Rice" price="2.00" />
          <Menu itemName="Musubi" price="2.00" />
          <Menu itemName="Teri Spam Musubi" price="8.00" />
          <Menu
            itemName="Fried Rice"
            itemDescription="Garlic $11, Kim Chee $12, Lup Chong $13, Shrimp $15"
            price="10.00"
          />
          <Menu
            itemName="Rib Eye Steak (12oz) with mushrooms & onions"
            itemDescription=" 16oz $25, Miso Style add $2"
            price="18.00"
          />
          <Menu itemName="Boneless Pulehu Ribs" price="12.00" />
          <Menu itemName="Boneless Kalbi Ribs" price="11.00" />
          <Menu itemName="Chop Steak" price="13.00" />
          <Menu
            itemName="Fried Pork Chops"
            itemDescription="Lechon Style $18"
            price="16.00"
          />
          <Menu itemName="Spicy Smoked Pork" price="10.00" />
          <Menu itemName="Garlic Chicken" price="12.00" />
          <Menu itemName="Korean Chicken" price="12.00" />
          <Menu itemName="Yakitori Chicken" price="13.00" />
          <Menu itemName="Misoyaki Chicken" price="10.00" />
          <Menu itemName="Dynamite Chicken" price="12.00" />
          <Menu itemName="Karaage Chicken" price="10.00" />
          <Menu itemName="Spicy Crispy Chicken Wings" price="10.00" />
          <Menu itemName="Crispy Chicken Gizzards" price="10.00" />
          <Menu itemName="Omelet" price="8.00" />
          <Menu itemName="Fried Calamari" price="10.00" />
          <Menu itemName="Dried Ika" price="10.00" />
          <Menu
            itemName="Salt & Pepper Shrimp"
            itemDescription="Dynamite $14"
            price="12.00"
          />
          <Menu itemName="Ahi Belly" price="12.00" />
          <Menu itemName="Ahi Shoyu Poke" price="12.00" />
          <Menu itemName="Spicy Tuna Poke" price="12.00" />
          <Menu itemName="Ahi Sashimi	" price="12.00" />
          <Menu itemName="Blackened Ahi" price="12.00" />
          <Menu itemName="Oyster Shooters" price="12.00" />
          <Menu itemName="Opakapaka Tacos (2 per order)" price="12.00" />
          <Menu itemName="King Crab Legs" price="Market Price" />
          <Menu
            itemName="Cheeseburger w/fries"
            itemDescription="Substitute Onion Rings add $1"
            price="12"
          />
          <Menu itemName="BLT Sandwich" price="10.00" />
          <Menu itemName="Tuna Sandwich" price="10.00" />
          <Menu itemName="Tuna Melt" price="10.00" />
          <Menu itemName="Spam & Egg Sandwich" price="10.00" />
          <Menu itemName="Grilled Cheese Sandwich" price="6.00" />
        </Section>
        <Section>
          <Intro
            heading="NEW LUNCH MENU"
            subheading="We are open for takeout or delivery. Please call (808) 545-2424. Free delivery is available: Puncbowl to Pensacola and Beretania to Ala Moana."
          />
        </Section>
        <Section id="menu">
          <Menu
            itemName="Tofu Salad"
            itemDescription="watercress, pulled salmon, red onions, tomato, tofu, with house dressing"
            price="9.00"
          />
          <Menu
            itemName="Fried Saimin"
            itemDescription="yakisoba, spam, kamaboko"
            price="9.00"
          />
          <Menu
            itemName="Fried Rice"
            itemDescription="bacon, onion, carrot, eggs. (Garlic $8, Kim Chee $9, Lup Chong $10, Shrimp $11)"
            price="7.00"
          />
          <Menu
            itemName="Ahi Poke Bowl"
            itemDescription="fresh ahi, white rice, furikake, onion, limu, green onion, soy sauce, sesame seeds"
            price="11.00"
          />
          <Menu
            itemName="Spicy Ahi Bowl"
            itemDescription="fresh ahi, white rice, furikake, spicy aioli, green onion, nori sheets"
            price="11.00"
          />
          <Menu
            itemName="Cheeseburger"
            itemDescription="all beef patty, cheddar cheese, onion, lettuce, tomato, burger spread, bun, crinkle fries"
            price="11.00"
          />
          <Menu
            itemName="BLT"
            itemDescription="white bread, bacon, lettuce, tomato, crinkle fries"
            price="7.00"
          />
          <Menu
            itemName="Spam Egg"
            itemDescription="white bead, crinkle fries"
            price="7.00"
          />
          <Menu
            itemName="Tuna Melt"
            itemDescription="tuna, mayo, cheddar cheese, crinkle fries"
            price="7.00"
          />
          <Menu
            itemName="Miso Ramen"
            itemDescription="fried shrimp, fish cake, green onions"
            price="9.00"
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
            price="11.00"
          />
          <Menu
            itemName="chopped steak"
            itemDescription="chuck steak, onion, carrot, celery, bell peppers, sweet soy, oyster sauce"
            price="9.00"
          />
          <Menu
            itemName="pork chops"
            itemDescription="lightly battered, deep fried"
            price="11.00"
          />
          <Menu
            itemName="spicy pork"
            itemDescription="smoked pork, sauteed onion, chili pepper"
            price="11.00"
          />
          <Menu
            itemName="kalbi"
            itemDescription="bone-in, house marinades"
            price="11.00"
          />
          <Menu
            itemName="korean chicken"
            itemDescription="lightly battered, sweet soy, sesame, chili"
            price="9.00"
          />
          <Menu
            itemName="garlic chicken"
            itemDescription="lightly battered, sweet soy, garlic, furikake"
            price="9.00"
          />
          <Menu
            itemName="fried chicken"
            itemDescription="chopped, boneless, skin-on"
            price="9.00"
          />
          <Menu
            itemName="wing zings"
            itemDescription="mild spicy chicken wings, deep fried, ranch"
            price="9.00"
          />
          <Menu
            itemName="furikake ahi"
            itemDescription="panko furikake crusted, wasabe aioli"
            price="11.00"
          />
          <Menu
            itemName="blackened ahi"
            itemDescription="rolled on blackened seasoning, sashimi style, sweet soy dijon sauce"
            price="11.00"
          />
          <Menu
            itemName="ahi belly"
            itemDescription="deep fried, lightly battered, ponzu"
            price="11.00"
          />
          <Menu
            itemName="steamed fish"
            itemDescription="basa, sesame, ginger, garlic, cilantro, soy"
            price="9.00"
          />
          <Menu
            itemName="Salt Pepper Shrimp"
            itemDescription="peeled, garlic, green onions"
            price="11.00"
          />
          <Menu
            itemName="calamari"
            itemDescription="buttermilk, battered"
            price="11.00"
          />
        </Section>
        <Section style={{ marginTop: "4rem", marginBottom: "1rem" }}>
          <Intro heading="contact us" />
        </Section>
        <Section id="information">
          <ContactForm />
        </Section>
        <Helmet>
          <script
            src="https://app.upserve.com/platform/olo-widget.js?tjs-bar-and-grill-honolulu"
            type="text/javascript"
            id="upserve-olo-script"
          ></script>
        </Helmet>
      </Layout>
    )
  }
}
