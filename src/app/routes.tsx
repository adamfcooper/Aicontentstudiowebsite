import { createBrowserRouter } from "react-router";
import { HomePage } from './pages/HomePage';
import { CreatorsPage } from './pages/CreatorsPage';
import { CreatorProfilePage } from './pages/CreatorProfilePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { RootLayout } from './layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "faq", Component: FaqPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "terms-of-service", Component: TermsOfServicePage },
      { path: "our-work", Component: CaseStudiesPage },
      { path: "creators", Component: CreatorsPage },
      { path: "creators/:id", Component: CreatorProfilePage },
    ],
  },
]);
