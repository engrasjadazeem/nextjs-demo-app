import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`} as={`/p/${props.id}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );
// export default function Blog() {
//   return (
//     <div>
//       <Layout>
//       <h1>My Blog</h1>
//         <ul>
//           <PostLink id="hello-nextjs" title="Hello Next.js" />
//           <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
//           <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
//         </ul>
//       </Layout>
//     </div>
//   );
// }

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Shows data fetched, Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  }
};

export default Index;