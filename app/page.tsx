import { ApiAccordion } from "@/components/custom-component/ApiAccordion";
import { BenefitsCard } from "@/components/custom-component/BenefitsCard";
import { Button } from "@/components/ui/button";
import { Accordion } from "@radix-ui/react-accordion";
import {
  apiExample,
  benefits,
  members,
} from "../constants/landingPage.constant";
import { ImageCard } from "@/components/custom-component/ImageCard";

export default function Home() {
  return (
    <main>
      <section className="section-size max-width flexbox-center flex-col gap-4">
        <h1 className="text-center hero-font sm:max-w-[75vw] lg:max-w-[65vw]">
          Leading Solution to Optimize your Health
        </h1>

        <p className="text-center description-text md:max-w-[80vw] lg:max-w-[70vw]">
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
            <h2 className="subhero-font">Why Choose Us?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
              {benefits.map((item) => (
                <BenefitsCard
                  key={item.title}
                  description={item.description}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="padding h-full flexbox-center flex-col gap-4 ">
          <div className="bg-black w-full padding rounded-lg">
            <h2 className="text-white subhero-font text-center">
              API Endpoint
            </h2>
            <p className="description-text text-center max-w-[80%] mx-auto my-2">
              Explore our comprehensive API endpoints that provide access to
              historical Olympic data. Each endpoint is designed to deliver
              specific information about medals, athletes, events, and host
              countries.
            </p>
            <Accordion
              type="single"
              collapsible
              className="w-full mt-6 space-y-4"
            >
              {apiExample.map((item) => (
                <ApiAccordion
                  key={item.endpoint}
                  description={item.description}
                  endpoint={item.endpoint}
                  requestMethod={item.requestMethod}
                />
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-size gap-4 pb-6">
          <h2 className="text-bold subhero-font">Meet Our Team</h2>
          <p className="description-text sm:max-w-[80vw] mt-4">
            Meet the talented developers behind this project. Our team is
            passionate about making Olympic historical data accessible through
            modern web technologies and APIs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {members.map((item) => (
              <ImageCard
                key={item.name}
                description={item.description}
                image={item.image}
                name={item.name}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
