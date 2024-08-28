import { redirect } from "next/navigation";
import { auth } from "../auth";
import FoodCard from "../components/FoodCard";
import AboutUs from "../components/layouts/AboutUs";
import BestSellerSection from "../components/layouts/BestSellerSection";
import ContactUs from "../components/layouts/ContactUs";
import HeroSection from "../components/layouts/HeroSection";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="">
      <HeroSection />
      <BestSellerSection />
      <div className="py-14 grid grid-cols-4 gap-5">
        <FoodCard
          image={"/burger.png"}
          title={"Beef Burger"}
          description={
            "Tasty, delicious, and has me craving more on the first bite.Juicy, mouthwatering, tasty, and everything you’d ever want to savor."
          }
          price={10}
        />
        <FoodCard
          image={"/burger.png"}
          name={"burger"}
          title={"Beef Burger"}
          description={
            "Tasty, delicious, and has me craving more on the first bite.Juicy, mouthwatering, tasty, and everything you’d ever want to savor."
          }
          price={10}
        />
        <FoodCard
          image={"/burger.png"}
          title={"Beef Burger"}
          description={
            "Tasty, delicious, and has me craving more on the first bite.Juicy, mouthwatering, tasty, and everything you’d ever want to savor."
          }
          price={10}
        />
      </div>
      <AboutUs />
      <ContactUs />
    </main>
  );
}
