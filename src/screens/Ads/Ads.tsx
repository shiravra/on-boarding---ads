import { ArrowLeftIcon, EditIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Data for the sidebar steps
const sidebarSteps = [
  {
    number: 1,
    title: "Campaign creation",
    isActive: true,
    subSteps: [
      { name: "Objectives", isActive: false },
      { name: "Landing page", isActive: false },
      { name: "Audiences", isActive: false },
      { name: "Target cost", isActive: false },
      { name: "Budget", isActive: false },
      { name: "Ads", isActive: true },
    ],
  },
  { number: 2, title: "Review & Submit", isActive: false },
  { number: 3, title: "Payment", isActive: false },
  { number: 4, title: "Tracking & Conversions", isActive: false },
];

// Data for the ad cards
const adCards = [
  {
    id: 1,
    image: "https://c.animaapp.com/m962w2dpnRCaSe/img/frame-1000003770.png",
    title: "Your optimal health and nutrition shouldn't be a mystery",
    description:
      "Helping to sustain physical and emotional endurance, NutraBoost has a combination of natural-source.",
    sponsor: "Glasses USA | Sponsored",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/m962w2dpnRCaSe/img/frame-1000003770-1.png",
    title:
      "Healthy Hair Bundle - Magnesium, Hair, Skin and Nails Complex & Biotin",
    description:
      "Helping to sustain physical and emotional endurance, NutraBoost has a combination of natural-source.",
    sponsor: "Glasses USA | Sponsored",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/m962w2dpnRCaSe/img/frame-1000003770-2.png",
    title: "Multivitamin And Mineral For Children and Adults",
    description:
      "Helping to sustain physical and emotional endurance, NutraBoost has a combination of natural-source.",
    sponsor: "Glasses USA | Sponsored",
  },
  {
    id: 4,
    image: "https://c.animaapp.com/m962w2dpnRCaSe/img/frame-1000003770-3.png",
    title:
      "High quality supplements crafted with genuine integrity for exceptional effectiveness",
    description:
      "Helping to sustain physical and emotional endurance, NutraBoost has a combination of natural-source.",
    sponsor: "Glasses USA | Sponsored",
  },
  {
    id: 5,
    image: "https://c.animaapp.com/m962w2dpnRCaSe/img/image.png",
    title:
      "Healthy Hair Bundle - Magnesium, Hair, Skin and Nails Complex & Biotin",
    description:
      "Helping to sustain physical and emotional endurance, NutraBoost has a combination of natural-source.",
    sponsor: "Glasses USA | Sponsored",
  },
  {
    id: 6,
    image: "https://c.animaapp.com/m962w2dpnRCaSe/img/image-1.png",
    title: "Your optimal health and nutrition shouldn't be a mystery",
    description:
      "Helping to sustain physical and emotional endurance, NutraBoost has a combination of natural-source.",
    sponsor: "Glasses USA | Sponsored",
  },
];

export const Ads = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex h-[60px] items-center p-5 bg-[#1d4488]">
        <div className="relative w-[75.71px] h-5">
          <img
            className="absolute w-[69px] h-[18px] top-px left-px"
            alt="Logo"
            src="https://c.animaapp.com/m962w2dpnRCaSe/img/group.png"
          />
          <img
            className="absolute w-[3px] h-2 top-[9px] left-[72px]"
            alt="Vector"
            src="https://c.animaapp.com/m962w2dpnRCaSe/img/vector.svg"
          />
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-[213px] border-r border-gray-4 p-6 relative">
          <img
            className="absolute w-[45px] h-[45px] top-[43px] left-[191px]"
            alt="Arrow"
            src="https://c.animaapp.com/m962w2dpnRCaSe/img/arrow.svg"
          />

          <div className="flex flex-col gap-8 h-full">
            <div className="flex flex-col gap-6">
              {/* Campaign creation section */}
              <div className="flex flex-col gap-2">
                {sidebarSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex items-center gap-2 h-9">
                      <div
                        className={`flex items-center justify-center w-6 h-6 rounded-full border-[1.5px] ${step.isActive ? "border-blue text-blue" : "border-gray-7 text-gray-7"}`}
                      >
                        <span
                          className={`text-xs font-medium ${step.isActive ? "text-blue" : "text-gray-7"}`}
                        >
                          {step.number}
                        </span>
                      </div>
                      <span
                        className={`text-sm ${step.isActive ? "font-medium text-gray-9" : "font-normal text-gray-7"}`}
                      >
                        {step.title}
                      </span>
                    </div>

                    {/* Sub-steps for Campaign creation */}
                    {step.number === 1 && step.subSteps && (
                      <div className="flex flex-col">
                        {step.subSteps.map((subStep, subIndex) => (
                          <React.Fragment key={subIndex}>
                            {subIndex > 0 && (
                              <div className="flex h-8 items-center px-[11px]">
                                <div
                                  className={`w-0.5 h-full ${subStep.isActive ? "bg-blue" : "bg-gray-8"}`}
                                />
                              </div>
                            )}
                            <div className="flex items-center gap-2 pl-[5px] h-2">
                              <div className="flex items-center justify-center w-3.5 h-3.5 rounded-[20px]">
                                <div
                                  className={`w-2 h-2 rounded ${subStep.isActive ? "bg-blue" : "bg-gray-8"}`}
                                />
                              </div>
                              <span
                                className={`text-sm ${subStep.isActive ? "font-bold text-blue" : "font-normal text-gray-8"}`}
                              >
                                {subStep.name}
                              </span>
                            </div>
                          </React.Fragment>
                        ))}
                        <div className="flex h-6 items-center px-[11px]">
                          <div className="w-0.5 h-full bg-gray-6" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1 flex flex-col">
          <div className="flex-1 p-12">
            {/* Add/edit Ads button */}
            <div className="flex justify-end mb-8">
              <Button variant="outline" className="border-blue text-blue">
                <EditIcon className="w-6 h-6 mr-1" />
                Add/edit Ads
              </Button>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center gap-8">
              {/* Header */}
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-gray-9 text-[28px] font-bold">
                  Ads variations (6 ads)
                </h1>
                <p className="text-gray-7 text-xl text-center max-w-[863px]">
                  You can upload your own or generate more creatives with AI
                  that are aligned with Taboola policy and best practices To
                  continue to the next step make sure you have minimum 4 ad
                  variations.
                </p>
              </div>

              {/* Ad cards grid */}
              <div className="grid grid-cols-3 gap-6">
                {adCards.map((ad) => (
                  <Card
                    key={ad.id}
                    className="rounded-[6.86px] shadow-[0px_1.72px_3.43px_#00000008,0px_3.43px_4.29px_#00000005,0px_0.86px_8.58px_#0000001f] p-[6.86px]"
                  >
                    <CardContent className="p-0 flex flex-col gap-[6.86px]">
                      <div className="relative w-full h-[132.06px] rounded-[3.65px] overflow-hidden">
                        <img
                          src={ad.image}
                          alt={ad.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-[6.86px]">
                        <div className="flex flex-col gap-[1.72px]">
                          <h3 className="text-[13.7px] font-bold text-gray-9">
                            {ad.title}
                          </h3>
                          <p className="text-[11.1px] text-gray-9">
                            {ad.description}
                          </p>
                        </div>
                        <div className="flex items-start justify-between">
                          <span className="text-[10.3px] text-gray-7">
                            {ad.sponsor}
                          </span>
                          <div className="inline-flex items-center justify-center px-[5.35px] py-[1.34px] bg-white rounded-[2.68px] border-[0.67px] border-solid border-gray-6">
                            <span className="text-[8px] font-medium text-gray-7 tracking-[0.33px]">
                              Learn More
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="h-[71px] border-t border-gray-4 flex items-center justify-between px-4">
            <Button variant="ghost" className="flex items-center gap-0.5">
              <ArrowLeftIcon className="w-5 h-5" />
              Back
            </Button>
            <Button className="bg-blue text-white">Next</Button>
          </footer>
        </main>
      </div>
    </div>
  );
};
