import { OpenerWithCarousel } from "./OpenerWithCarousel";
import { TestimonialsBlock } from "./TestimonialsBlock";
type Props = {
  data: any[] | null | undefined;
};

export default function Content({ data }: Props) {
  const sections = data
    ? data.map((c) => {
        switch (c._type) {
          case "testimonialsBlock":
            return <TestimonialsBlock key={c._id} content={c} />;
          case "openerWithCarousel":
            return <OpenerWithCarousel key={c._id} content={c} />;
          default:
            return <h1 key={c._id}>No component found for {c._type}</h1>;
        }
      })
    : [];

  return <>{sections.filter(Boolean)}</>;
}
