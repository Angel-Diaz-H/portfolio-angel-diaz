import {
  AppGallery,
  BadgesExperience,
  DetailsExperiences,
  HeaderExperience,
  ItemsTechExperience,
} from "@/components/index";

export const ContentExperience = () => {
  return (
    <div className="mx-2 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.3fr_0.9fr]">
      <div className="flex flex-col gap-3">
        <HeaderExperience />
        <DetailsExperiences />
        <BadgesExperience />
      </div>

      <div className="flex w-full flex-col gap-6">
        <AppGallery />
        <ItemsTechExperience />
      </div>
    </div>
  );
};
