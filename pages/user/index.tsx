import Layout from "@/components/layout";
import { useRouter } from "next/router";
import styles from '@/styles/Users.module.css'

interface UserProps {
    dataUsers: Array<any>;
}

export default function User(props: UserProps) {
    const {dataUsers} = props;
    const router = useRouter();
  return (
    <Layout pageTitle="Userpage">
        {dataUsers.map((user) => {
            return (
                <div key={user.id} onClick={() => router.push(`/user/${user.id}`)} className={styles.card}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            )
        })}
    </Layout>
  )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
  return {
    props: {
      dataUsers
    }
  }
}