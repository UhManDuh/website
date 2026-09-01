import Typewriter from "typewriter-effect";

type CyclingTextProps = {
  strings: readonly string[];
};

function CyclingText({ strings }: CyclingTextProps) {
  return (
    <Typewriter
      options={{
        strings: [...strings],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default CyclingText;
