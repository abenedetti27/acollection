import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Replace with your main App component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArtistGallery1 from './pages/ArtistGallery1';
import ArtistsPage from './pages/ArtistsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import FineArtParty from './pages/FineArtParty';
import Galleries from './pages/Galleries';
import PartyInfo from './pages/PartyInfo';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/artist-gallery-1" component={ArtistGallery1} />
        <Route path="/artists" component={ArtistsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/fine-art-party" component={FineArtParty} />
        <Route path="/galleries" component={Galleries} />
        <Route path="/party-info" component={PartyInfo} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-use" component={TermsOfUse} />
      </Switch>
    </App>
  </Router>
);
