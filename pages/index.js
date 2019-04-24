import Head from "next/head";
import Link from "next/link";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
    <div>
        <Head>
            <title>Home | minhan store</title>
        </Head>
        <h1>
            Posts:
        </h1>
        <ul>
            <li>
                <PostLink title={"Very important"}/>
            </li>
            <li>
                <PostLink title={"Super old"}/>
            </li>
        </ul>

    </div>
)

export default withLayout(Index);