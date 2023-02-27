import { getWordPressProps, WordPressTemplate } from '@faustwp/core';

export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export async function getStaticProps(ctx) {
  try {
    return getWordPressProps({ ctx });
  } catch(err) {
    console.log('apollo err', await err.networkError.response.body())
    
  }

  
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
