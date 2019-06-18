import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`} as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <div>
      <Layout>
      <h1>My Blog</h1>
        <ul>
          <PostLink id="hello-nextjs" title="Hello Next.js" />
          <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
          <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
        </ul>
      </Layout>
    </div>
  );
}