import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WorkExperiences from '@/components/WorkExperiences';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';

import Head from 'next/head';
import Education from "@/components/Education";

const Home = () => {
	return (
		<>
			<Head>
				<title>Murat Konuralp Senoglu's Portfolio</title>
				<meta name="description" content="Konuralp's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
				<Hero />
				<About />
				<Blog />
				<Skills />
				<WorkExperiences />
				<Education />
				<Contact />
			</div>
		</>
	);
};

export default Home;
