import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { RecipeList } from "../components/recipes/RecipeList";
// import "../styles/styles.scss";
import Layout from "../components/shared/Layout/Layout";

const pageStyles = {
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main style={pageStyles}>
            <Layout>
                <RecipeList />
            </Layout>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <>
        <title>Home Page</title>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        ></meta>
    </>
);
