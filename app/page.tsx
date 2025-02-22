import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { benefits } from "./constants/landingPage.constant";
import { BenefitsCard } from "@/components/custom-component/BenefitsCard";

export default function Home() {
  return (
    <div>
      <section className="section-size max-width flexbox-center flex-col gap-4">
        <h1 className="text-center hero-font">
          Leading Solution to Optimize your Health
        </h1>

        <p className="text-center text-secondary-color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          officiis molestiae totam, ut commodi pariatur. Non nulla harum ab ex.
        </p>

        <div className="flexbox-center flex-col md:flex-row  gap-4">
          <Button className="cta-btn">Get Started</Button>
          <Button className="cta-btn">Get Started</Button>
        </div>
      </section>

      <div className="bg-secondary-color">
        <section className="padding h-full p-4 ">
          <div className="bg-white padding rounded-xl h-full max-width">
            <h1 className=" hero-font">Why Choose Us?</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
              {benefits.map((item) => {
                return (
                  <BenefitsCard
                    key={item.title}
                    description={item.description}
                    title={item.title}
                  ></BenefitsCard>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-size flexbox-center flex-col gap-4"></section>

        <section className="section-size flexbox-center flex-col gap-4"></section>
      </div>
    </div>
  );
}
