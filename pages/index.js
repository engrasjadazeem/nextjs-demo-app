import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
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
          <PostLink title="Hello Next.js" />
          <PostLink title="Learn Next.js is awesome" />
          <PostLink title="Deploy apps with Zeit" />
        </ul>
      </Layout>
    </div>
  );
}