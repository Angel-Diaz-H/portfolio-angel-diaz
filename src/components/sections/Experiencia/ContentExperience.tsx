import {
  AppGallery,
  BadgesExperience,
  DetailsExperiences,
  HeaderExperience,
  ItemsTechExperience,
} from "@/components/index";

export const ContentExperience = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.9fr]">
      {/* IZQUIERDA. */}
      <div className="flex flex-col gap-3">
        <HeaderExperience />
        <DetailsExperiences />
        <BadgesExperience />
      </div>

      {/* DERECHA. */}
      <div className="flex w-full flex-wrap gap-6">
        <AppGallery />
        <ItemsTechExperience />
      </div>
    </div>
  );
};
