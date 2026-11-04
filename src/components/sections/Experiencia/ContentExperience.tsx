import {
  AppGallery,
  BadgesExperience,
  DetailsExperiences,
  HeaderExperience,
  ItemsTechExperience,
} from "@/components/index";
import { experiences, type Experience } from "@/data";

interface Props {
  experience?: Experience;
}

export const ContentExperience = ({
  experience = experiences[0],
}: Props) => {
  return (
    <div className="mx-2 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.3fr_0.9fr]">
      <div className="flex flex-col gap-3">
        <HeaderExperience experience={experience} />
        <DetailsExperiences experience={experience} />
        <BadgesExperience experience={experience} />
      </div>

      <div className="flex w-full flex-col gap-6">
        <AppGallery experience={experience} />
        <ItemsTechExperience experience={experience} />
      </div>
    </div>
  );
};
