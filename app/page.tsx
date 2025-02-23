import { ApiAccordion } from "@/components/custom-component/ApiAccordion";
import { BenefitsCard } from "@/components/custom-component/BenefitsCard";
import { ImageCard } from "@/components/custom-component/ImageCard";
import { Accordion } from "@radix-ui/react-accordion";
import {
  apiExample,
  benefits,
  members,
} from "../constants/landingPage.constant";

export default function Home() {
  return (
    <main>
      <section className="section-size max-width flexbox-center flex-col gap-4">
        <h1 className="text-center hero-font sm:max-w-[75vw] lg:max-w-[65vw]">
          Uncover Olympic History Like Never Before
        </h1>

        <p className="text-center description-text md:max-w-[80vw] lg:max-w-[70vw]">
          Dive into our interactive dashboard to explore medal counts, athlete
          stats, and performance trends across Olympic history. All in one
          place!
        </p>
      </section>

      <div className="bg-secondary-color">
        <section className="padding h-full p-4 ">
          <div className="bg-white padding rounded-xl h-full max-width">
            <h2 className="subhero-font text-center">Why Choose Us?</h2>

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

        <section className="h-full py-10 flexbox-center flex-col gap-4 max-width">
          <div className="bg-white w-full padding rounded-lg">
            <h2 className="text-black subhero-font text-center">
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

        <section className="padding h-full gap-4 pb-6 max-width">
          <h2 className="text-bold subhero-font text-center">Meet Our Team</h2>
          <p className="description-text sm:max-w-[80vw] mx-auto mt-4 text-center">
            Meet the talented developers behind this project. Our team is
            passionate about making Olympic historical data accessible through
            modern web technologies and APIs.
          </p>

          <div className="flex flex-col lg:flex-row justify-center mt-6 gap-6 lg:gap-10">
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
