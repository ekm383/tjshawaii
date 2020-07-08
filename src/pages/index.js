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
        <Section style={{margin: "2rem auto"}}>
        <Intro
            heading="LUNCH MENU"
            subheading="Served Monday through Friday 10:00am - 2:00pm"
          />
          <Section>
            <h2 style={{fontSize: "1.5rem", marginBottom: "1rem"}}>Salads</h2>
          </Section>
          <Menu
            itemName="Chef Salad"
            itemDescription="Locally sourced organic greens, boiled eggs, smoke meat, red onions, cucumber, cherry tomatoes, radish, shaved carrot, wonton strips with The Lunch Bar's in-house Smoked 1000 Island dressing."
            price="14"
          />
          <Menu
            itemName="House Salad"
            itemDescription="Locally sourced organic greens, avocado, red onions, cucumber, cherry tomatoes, radish, shaved carrot, wonton strips with The Lunch Bar's in-house vegan Tarragon dressing."
            price="13"
          />
          <Menu
            itemName="Tofu Salad"
            itemDescription="Tofu, cucumber, tomatoes, onions, radish, shaved carrots, sesame seed with a vegan Ume Ponzu dressing."
            price="12"
          />
          <Menu
            itemName="Pesto Chicken Salad"
            itemDescription="Locally sourced organic mixed greens, herb roasted chicken, pesto, cucumber, tomatoes, red onion, radish, shaved carrot, roasted bell peppers, shaved cheese, wonton strips with a balsamic vinaigrette."
            price="13"
          />
          <Menu
            itemName="Ahi Tataki Salad"
            itemDescription="Locally sourced organic mixed greens, fresh locally sourced ahi, pesto, cucumber, tomatoes, red onion, radish, shaved carrots, roasted red bell peppers, shaved cheese, wonton strips with ponzu
            dressing."
            price="16"
          />
          <Menu
            itemName="Optional Salad Add-Ons"
            itemDescription="Avocado $2, Quinoa $2, Almonds $2, Candied Walnuts $2, Boiled Eggs $1.50, Ahi Tataki $7, Smoked Meat $4, Bacon Bits $3"
            price=""
          />
          <Section style={{flexDirection: "column", alignContent: "flex-start", marginBottom: "1rem"}}>
            <h2 style={{fontSize: "1.5rem"}}>Lunch Plates</h2>
            <p>Choice of either white rice, brown rice. Option to replace rice with Quinoa - $2. Choice of either tossed or mac salad</p>
          </Section>
          <Menu
            itemName="Loco Moco"
            itemDescription="Two beef patties, two eggs over easy, mushroom & onion smothered in gravy."
            price="15"
          />
          <Menu
            itemName="New York Steak w/ Miso"
            itemDescription="New York steak, Mushroom, onions, miso teri sauce."
            price="15"
          />
          <Menu
            itemName="Smoked Teri Chicken"
            itemDescription="Marinated chicken, green onions, bed of cabbage."
            price="13"
          />
          <Menu
            itemName="Smoked Meat"
            itemDescription="Smoked meat, onions, bed of cabbage."
            price="14"
          />
          <Menu
            itemName="Idako Karaage (Baby Octopus)"
            itemDescription="12 pcs of battered and fried Idako w / smoked, spicy aioli/kabayaki on a bed of cabbage"
            price="13"
          />
          <Menu
            itemName="Garlic Ahi"
            itemDescription="Ahi steak w / roasted vegetables, covered in a Dashi Veloute sauce"
            price="Market Price"
          />
          <Menu
            itemName="Spicy Ahi Katsu"
            itemDescription="Ahi katsu w / spicy smoked aioli, kabayaki, furikake, and green onions."
            price="17"
          />
          <Menu
            itemName="Pan Seared Salmon w / Soy Capers
            Beurre Blanc Sauce"
            itemDescription="Salmon w / roasted vegetables, covered in a soy capers beurre blanc sauce."
            price="14"
          />
          <Menu
            itemName="Garlic Ginger Fish w /
            Charred Bok Choy"
            itemDescription="Fish, cabbage bottom, charred bok choy, topped with ginger-garlic-scallion sauce."
            price="15"
          />
          <Menu
            itemName="Asian Cajun Garlic Shrimp"
            itemDescription="Shrimp, cajun butter, cabbage bottom, green onions, crispy garlic chips topping."
            price="15"
          />
          <Menu
          itemName="Nonerz Vegan Plate (GF)"
          itemDescription="Roasted portobello, tofu steak, house garlic ginger scallion sauce (avocado oil), charred bok choy."
          price="15"
        />
        <Section>
            <h2 style={{fontSize: "1.5rem", marginBottom: "1rem"}}>Burgers</h2>
          </Section>
        <Menu
          itemName="Lunch Bar Burger"
          itemDescription="Beef patty, lettuce, caramelized onions, tomatoes w / smoked 1000 island dressing. Add On: Bacon $2, Smoked Meat $2, Cheese $1."
          price="11"
        />
        <Menu
          itemName="Veggie Burger"
          itemDescription="Tofu, roasted portobello, roasted bell pepper, tomato, lettuce, pickle, caramelized onions, pesto."
          price="10"
        />
        <Menu
          itemName="Burger Combo"
          itemDescription="Burger w / choice of either sweet potato fries / regular fries / tater tots + can of soda - add $5.
          Burger w / loaded tater tots - add $8."
          price=""
        />
        <Section>
            <h2 style={{fontSize: "1.5rem", marginBottom: "1rem"}}>Sides</h2>
          </Section>
        <Menu
          itemName="Fries"
          itemDescription=""
          price="3"
        />
        <Menu
          itemName="Sweet Potato Fries"
          itemDescription=""
          price="3"
        />
        <Menu
          itemName="Tater Tots"
          itemDescription=""
          price="3"
        />
        <Menu
          itemName="Loaded Tater Tots"
          itemDescription=""
          price="8"
        />
        </Section>
        <Section style={{ margin: "2rem auto" }}>
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
        <Section style={{ margin: "2rem auto" }}>
          <Intro heading="DINNER ADDITIONS" subheading="No Rice or Mac Salad" />
        </Section>
        <Section id="menu">
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
        <Section style={{ margin: "2rem auto" }}>
          <Intro
            heading="NEW DINNER ADD-ONS"
            subheading="We are open for takeout or delivery. Please call (808) 545-2424. Free delivery is available: Puncbowl to Pensacola and Beretania to Ala Moana. All plates come with white rice and mac salad. No substitutions. Served after 2pm daily."
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
