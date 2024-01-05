import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './index.css';

import Root from './routes/Components/Root/Root';
import ErrorPage from './routes/ErrorPage';
import HomePage from './routes/HomePage';
import AboutMePage from './routes/AboutMePage';
import ResumePage from './routes/ResumePage';
import PortfoliosPage from './routes/PortfoliosPage';
import CaseStudyPage from './routes/CaseStudyPage';
import FormPage from './routes/FormPage';
import ThankYouPage from './routes/ThankYouPage';
import FailedPage from './routes/FailedPage';
import PrivacyPolicyPage from './routes/PrivacyPolicyPage';
import TermsConditionPage from './routes/TermsConditionPage';

import { action as serviceAction } from './routes/Components/ServiceForm/ServiceForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={ <Root/> }
      errorElement={ <ErrorPage /> }
    >
      <Route index element={ <HomePage /> } />
      <Route path="/about-me" element={ <AboutMePage /> } />
      <Route path="/resume" element={ <ResumePage /> } />
      <Route path="/case-study" element={ <PortfoliosPage /> } />
      <Route path="/case-study/:project" element={ <CaseStudyPage /> } />
      <Route path="/hire" element={ <FormPage /> } action={ serviceAction } />
      <Route path="/thank-you" element={ <ThankYouPage /> } />
      <Route path="/failed" element={ <FailedPage /> } />
      <Route path="/privacy-policy" element={ <PrivacyPolicyPage /> } />
      <Route path="/terms-conditions" element={ <TermsConditionPage /> } />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
