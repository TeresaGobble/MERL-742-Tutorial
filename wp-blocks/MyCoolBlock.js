import { gql } from "@apollo/client";

export default function MyCoolBlock(props) {
  const className = 'wp-block-code';
  return (
    <pre className={className}>
      <p>{`${props.attributes?.content}`}</p>
    </pre>
  );
}

MyCoolBlock.fragments = {
  key: `MyCoolBlockBlockFragment`,
  entry: gql`
    fragment MyCoolBlockBlockFragment on CreateBlockMycoolblock {
      attributes {
        color
        content
        message
      }
    }
  `,
};
