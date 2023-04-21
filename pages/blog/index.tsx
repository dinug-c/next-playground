import Layout from "@/components/layout";
import { useRouter } from "next/router";
import styles from "../../styles/Posts.module.css"

interface PostProps {
    dataPosts: Array<any>;
}

export default function Blog(props: PostProps) {
  const {dataPosts} = props;
  const router = useRouter();
  return (
    <Layout pageTitle="Blog">
        {dataPosts.map((post) => {
            return (
                <div key={post.id} onClick={() => router.push(`/blog/${post.id}`)} className={styles.card}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                </div>
            )
        })}
    </Layout>
  )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataPosts = await res.json();
    return{
        props: {
            dataPosts,
        }
    }
}
