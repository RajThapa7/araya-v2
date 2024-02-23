import { merriweather } from "@/app/fonts";
import { Button, MotionDiv, MotionP } from "@/components";

const description = {
  inView: {
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      duration: 0.5,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    y: 200,
  },
};

const header = {
  inView: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    x: -800,
  },
};

function CTA() {
  return (
    <div className="px-6 py-24 green-background md:py-32 lg:py-44">
      <MotionDiv
        variants={description}
        initial="hidden"
        whileInView={"inView"}
        viewport={{ once: true }}
        className="flex flex-col mx-auto max-w-screen-xl gap-4 md:flex-row md:justify-between md:items-start lg:gap-24"
      >
        <MotionP
          variants={header}
          className={`text-primary  font-medium !leading-tight flex-1 header-1 ${merriweather.className}`}
        >
          Discovering Passion, Our Story in Colors
        </MotionP>
        <div className="text-primary flex flex-col gap-8 flex-1">
          <p className="header-4 leading-relaxed">
            {" "}
            Our story begins with passion, humble origins evolving into a
            symphony of creativity. Explore the intricate process, the trials,
            and triumphs that shape our art
          </p>
          <Button className="w-fit">Learn More</Button>
        </div>
      </MotionDiv>
    </div>
  );
}

export default CTA;
