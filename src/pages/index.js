import React, { Component } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
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
        <Section style={{ marginTop: "4rem" }}>
          <Intro
            heading="LUNCH MENU"
            subheading="We are open for takeout or delivery. Please call (808) 545-2424. Free delivery is available: Puncbowl to Pensacola and Beretania to Ala Moana. All plates come with white rice and mac salad. No substitutions."
          />
        </Section>
        <Section id="menu">
          <Menu
            itemName="Tofu Salad"
            itemDescription="watercress, pulled salmon, red onions, tomato, tofu, with house dressing"
            price="9.00"
          />
          <Menu
            itemName="New York Steak"
            itemDescription="Pulehu Style, Sauteed Mushrooms & Onions"
            price="14"
          />
          <Menu
            itemName="Chopped Steak"
            itemDescription="Chuck Steak, Onion, Carrot, Celery, Bell Pepper, Sweety Soy Oyster Sauce"
            price="12"
          />
          <Menu
            itemName="Kalbi"
            itemDescription="Bone-In, House Marinade"
            price="12"
          />
          <Menu
            itemName="Pulehu Shortribs"
            itemDescription="Bone-In, Hawaiian Salt, Black Pepper, Pickled Onions"
            price="12"
          />
          <Menu
            itemName="Fried Pork Chops"
            itemDescription="Lightly Battered & Deep Fried, Onion, Tomato, Vinegar Dipping Sauce"
            price="12"
          />
          <Menu
            itemName="Spicy Pork"
            itemDescription="Smoked & Sauteed with Onions"
            price="10"
          />
          <Menu
            itemName="Fried Chicken"
            itemDescription="Karaage Style with Ponzu"
            price="10"
          />
          <Menu
            itemName="Korean Chicken"
            itemDescription="Dipped in Sweet Sesame Soy Chili"
            price="10"
          />
          <Menu
            itemName="Garlic Chicken"
            itemDescription="Dipped in Sweet Soy Garlic Furikake"
            price="10"
          />
          <Menu
            itemName="Ahi Belly"
            itemDescription="Lightly Battered, Deep Fried, Chili Pepper Water"
            price="10"
          />
          <Menu
            itemName="Chinese Style Seared Fish"
            itemDescription="Basa, Sesame, Garlic, Ginger, Cilantro, Scallions, Soy Sauce"
            price="12"
          />
          <Menu
            itemName="Salt & Pepper Garlic Shrimp"
            itemDescription="Peeled Tail On, Lightly Battered, Scallions, Siracha"
            price="12"
          />
        </Section>
        <Section style={{ marginTop: "1rem" }}>
          <Intro heading="LUNCH ADDITIONS" subheading="No Rice or Mac Salad" />
        </Section>
        <Section id="menu">
          <Menu
            itemName="Kalbi Noodles"
            itemDescription="Classic Fried Saimin, Spam, Fishcake, House Bone-In Kalbi Short Ribs"
            price="12"
          />
          <Menu
            itemName="Kalbi Noodles"
            itemDescription="Classic Fried Saimin, Spam, Fishcake, House Bone-In Kalbi Short Ribs"
            price="12"
          />
          <Menu
            itemName="Kalbi Noodles"
            itemDescription="Classic Fried Saimin, Spam, Fishcake, House Bone-In Kalbi Short Ribs"
            price="12"
          />
          <Menu
            itemName="Fish & Chips"
            itemDescription="Beer Battered White Fish, Artichoke Tartar Sauce, Crinkle Cut Fries"
            price="12"
          />
          <Menu
            itemName="Filet-O-Fish Sandwich"
            itemDescription="Beer Battered White Fish, Lettuce, Tomato, Red Onions, Artichoke Tartar Sauce, Crinkle Cut Fries"
            price="10"
          />
          <Menu
            itemName="Sizzling Agedashi Style Tofu"
            itemDescription="Vegan & Gluten Free, Sauteed Onion, Zucchini, Red Bell Pepper, Mushroom, Garlic, Zesty Soy Agave Ginger Garlic Sauce, Served on a Sizzling Platter"
            price="12"
          />
        </Section>
        <Section style={{ marginTop: "2rem", marginBottom: "1rem" }}>
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
          <Menu itemName="Hot Saimin (miso) " price="8.00" />
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
          <Menu itemName="Ahi Sashimi " price="12.00" />
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
