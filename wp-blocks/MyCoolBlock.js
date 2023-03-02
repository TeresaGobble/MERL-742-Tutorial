import { gql } from "@apollo/client";

export default function CreateBlockMycoolblock(props) {
  const className = 'wp-block-code';
  return (
    <div>Something Something</div>
  );
}

CreateBlockMycoolblock.fragments = {
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


{/* <pre className={className}>
<p>{`${props.attributes?.content}`}</p>
</pre> */}