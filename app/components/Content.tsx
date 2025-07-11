import { OpenerWithCarousel } from "./OpenerWithCarousel";
import PressReleasesGallery from "./PhotoGallery";
import { TeamMembersBlock } from "./TeamMembersBlock";
import ChaptersGallery from "./ChaptersGallery";
import { TestimonialsBlock } from "./TestimonialsBlock";
import Chapter from "./Chapter";
import ChaptersList from "./ChaptersList";
import DirectorsList from "./DirectorsList";
import Donation from "./Donation";
import WhatWeDo from "./WhatWeDo";
import OurProgram from "./OurProgram";
import OurHistory from "./OurHistory";
type Props = {
  data: any[] | null | undefined;
};

export default function Content({ data }: Props) {
  const sections = data
    ? data.map((c) => {
        switch (c._type) {
          case "pressReleasesGallery":
            return <PressReleasesGallery key={c._id} content={c} />;
          case "teamMembersBlock":
            return <TeamMembersBlock key={c._id} content={c} />;
          case "testimonialsBlock":
            return <TestimonialsBlock key={c._id} content={c} />;
          case "openerWithCarousel":
            return <OpenerWithCarousel key={c._id} content={c} />;
          case "chaptersGallery":
            return <ChaptersGallery key={c._id} content={c} />;
          case "chapterComponent":
            return <Chapter key={c._id} content={c} />;
          case "chaptersList":
            return <ChaptersList key={c._id} content={c} />;
          case "directorsList":
            return <DirectorsList key={c._id} content={c} />;
          case "donation":
            return <Donation key={c._id} content={c} />;
          case "whatWeDo":
            return <WhatWeDo key={c._id} content={c} />;
          case "ourProgram":
            return <OurProgram key={c._id} content={c} />;
          case "ourHistory":
            return <OurHistory key={c._id} content={c} />;
          default:
            return <h1 key={c._id}>No component found for {c._type}</h1>;
        }
      })
    : [];

  return <>{sections.filter(Boolean)}</>;
}
