/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import HomePage from '../pages/HomePage';
import ConnectionPage from '../pages/ConnectionPage';
import InscriptionPage from '../pages/InscriptionPage';
import NotFoundPage from '../pages/NotFoundPage';
//import { useTranslation } from 'react-i18next';
import ActualitePage from '../pages/ActualitePage';
import DiasporaPage from '../pages/DiasporaPage';
import InnovationPage from '../pages/InnovationPage';
import InterviewPage from '../pages/InterviewPage';
import PortraitPage from '../pages/PortraitPage';
import PolitiquePage from '../pages/PolitiquePage';
import StartupPage from '../pages/StartupPage';
import SingleActualitePage from '../pages/SingleActualitePage';
import SinglePortraitPage from '../pages/SinglePortraitPage';
import SingleDiasporaPage from '../pages/SingleDiasporaPage';
import SingleInnovationPage from '../pages/SingleInnovationPage';
import SingleInterviewPage from '../pages/SingleInterviewPage';
import SingleStartupPage from '../pages/SingleStartupPage';
import SinglePolitiquePage from '../pages/SinglePolitiquePage';
const RagApp = () => {
  //const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={ConnectionPage} />
        <Route exact path="/signup" component={InscriptionPage} />
        <Route exact path="/api/rag/actualites" component={ActualitePage} />
        <Route exact path="/api/rag/actualites/:id" component={SingleActualitePage} />

        <Route exact path="/api/rag/portraits" component={PortraitPage} />
        <Route exact path="/api/rag/portraits/:id" component={SinglePortraitPage} />

        <Route exact path="/api/rag/diasporas" component={DiasporaPage} />
        <Route exact path="/api/rag/diasporas/:id" component={SingleDiasporaPage} />

        <Route exact path="/api/rag/innovations" component={InnovationPage} />
        <Route exact path="/api/rag/innovations/:id" component={SingleInnovationPage} />

        <Route exact path="/api/rag/interviews" component={InterviewPage} />
        <Route exact path="/api/rag/interviews/:id" component={SingleInterviewPage} />

        <Route exact path="/api/rag/startups/" component={StartupPage} />
        <Route exact path="/api/rag/startups/:id" component={SingleStartupPage} />

        <Route exact path="/api/rag/politiques" component={PolitiquePage} />
        <Route exact path="/api/rag/politiques/:id" component={SinglePolitiquePage} />

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};
export default RagApp;
