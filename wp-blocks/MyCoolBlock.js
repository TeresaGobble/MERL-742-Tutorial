import { gql } from "@apollo/client";

export default function MyCoolBlock(props) {
  console.log(props.attributes);
  return <div>MyCoolBlock</div>;
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
