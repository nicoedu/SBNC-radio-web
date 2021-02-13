import Header from '../../components/navbar/Header'

export default function Post(): JSX.Element {
  return (
    <Header />
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}