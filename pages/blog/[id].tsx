import Layout from "@/components/layout";
import { useRouter } from "next/router";

interface detailProps {
  post: object;
}

export default function detail(props: detailProps) {
  const router = useRouter();
  const {id} = router.query;
  const {post} = props;
  return (
    <Layout pageTitle="Detail Post">
        <h1>Detail Post {id}</h1>
        <p>{post.title}</p>
        <p>{post.body}</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataPost = await res.json();
  const paths = dataPost.map((post) => {
    return {
      params: {
        id: '${post.id}'
      }
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const {id} = context.params;
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
  const dataPost = await res.json();
  return {
    props: {
      post: {}
    }
  }
}