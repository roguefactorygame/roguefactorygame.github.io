import React from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { PageContent } from "../components/PageContent";

export default function DocsPage() {
  const { directory, file } = useParams();
  const [content, setContent] = React.useState();

  React.useEffect(() => {
    import(`../data/content/${directory}/${file}.js`).then((c) =>
      setContent(c.default)
    );
  }, [directory, file]);

  return (
    <PageContent>
      <article>
        <Markdown>{content}</Markdown>
      </article>
    </PageContent>
  );
}
