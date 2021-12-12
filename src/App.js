import React from 'react';
import About from './sections/about';
import Footer from './sections/footer';
import Projects from './sections/projects';
import { Helmet } from "react-helmet";
//import 'semantic-ui-css/semantic-ui-css'

const App = () => (
    <React.Fragment>
		<Helmet
			encodeSpecialCharacters={true}
		    titleTemplate="NASCIS - %s"
		    defaultTitle="NASCIS - Web agency">
			    <html lang="en" amp />
			    <base target="_blank" href="https://nascis.fr/" />

			    <meta name="description" content="French web agency created to help and make your ideas real" />

			    <link rel="canonical" href="https://nascis.fr" />
			    <link rel="apple-touch-icon" href="https://nascis.fr/nascis.png" />
			    <link rel="apple-touch-icon" sizes="72x72" href="https://nascis.fr/nascis.png" />
			</Helmet>
        <Footer />
    </React.Fragment>
);

export default App;
