import FoodCard from "@/components/FoodCard";
import BestSellerSection from "@/components/layouts/BestSellerSection";
import HeroSection from "@/components/layouts/HeroSection";

export default function Home() {
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
          name={'burger'}
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
    </main>
  );
}
