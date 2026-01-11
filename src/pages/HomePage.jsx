import { TrailerEmbed } from "../components/TrailerEmbed";
import { PageContent } from "../components/layout/PageContent";
import { DancingLetter } from "../components/DancingLetter";

export default function HomePage() {
  return (
    <PageContent>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <article>
          <h2 style={{ marginBottom: 0 }}>
            {"Welcome to Rogue Factory!".split("").map((letter, i) => (
              <DancingLetter key={i} index={i}>
                {letter}
              </DancingLetter>
            ))}
          </h2>
          <h3>
            {"The Automation Bullet Heaven".split("").map((letter, i) => (
              <DancingLetter key={i} index={i}>
                {letter}
              </DancingLetter>
            ))}
          </h3>
          <TrailerEmbed />
        </article>
      </div>
    </PageContent>
  );
}
