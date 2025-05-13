import { PageContent } from "../components/layout/PageContent";

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
          <h2>This site is a work in progress</h2>
        </article>
      </div>
    </PageContent>
  );
}
