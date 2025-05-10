import React from "react";
import Markdown from "react-markdown";
import PageContainer from "../components/PageContainer";
import { useParams } from "react-router-dom";

export default function DocsPage() {
  const { directory, file } = useParams();
  const [content, setContent] = React.useState();

  React.useEffect(() => {
    import(`../data/content/${directory}/${file}.js`).then((c) =>
      setContent(c.default)
    );
  }, [directory, file]);

  return (
    <PageContainer>
      <article>
        <Markdown>{content}</Markdown>
      </article>
    </PageContainer>
  );
}
