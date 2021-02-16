import { getAllRadioIds, getRadioData } from '../../lib/radios'

export default function Radio({radioData}): JSX.Element {
  return (
    <div>
      <h1> {radioData.name} </h1>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllRadioIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const radioData = getRadioData(params.id)
  return {
    props: {
      radioData
    }
  }
}