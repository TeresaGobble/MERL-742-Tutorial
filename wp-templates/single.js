import { gql } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";
import { WordPressBlocksViewer } from "@faustwp/blocks";

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const { title, content, date, author } = props.data.post;
  const { contentBlocks } = props.data.post;

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title={title} date={date} author={author.node.name} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <WordPressBlocksViewer contentBlocks={contentBlocks} />
      </main>

      <Footer />
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${Header.fragments.entry}
  ${blocks.MyCoolBlock.fragments.entry}
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
      contentBlocks {
        name
        __typename
        renderedHtml
        id: nodeId
        parentId
        ...${blocks.MyCoolBlock.fragments.key}
      }
    }
    ...HeaderFragment
  }
`;
