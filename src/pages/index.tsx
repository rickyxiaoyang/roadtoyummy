import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { RecipeList } from "../components/recipes/RecipeList";
import Layout from "../components/shared/Layout/Layout";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main>
			<Layout>
				<RecipeList />
			</Layout>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<>
		<title>Road to Yummy</title>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		></meta>
	</>
);
