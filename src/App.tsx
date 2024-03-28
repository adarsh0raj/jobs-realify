import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Jee from './pages/Jee/Jee';
import JeeJobs from './pages/Jee/JeeJobs';
import JeePattern from './pages/Jee/JeePattern';
import Upsc from './pages/Upsc/Upsc';
import UpscJobs from './pages/Upsc/UpscJobs';
import UpscPattern from './pages/Upsc/UpscPattern';
import SscCgl from './pages/SscCgl/SscCgl';
import SscCglJobs from './pages/SscCgl/SscCglJobs';
import SscCglPattern from './pages/SscCgl/SscCglPattern';
import SscChsl from './pages/SscChsl/SscChsl';
import SscChslJobs from './pages/SscChsl/SscChslJobs';
import SscChslPattern from './pages/SscChsl/SscChslPattern';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="SSC CGL | JobsRealify" />
              <ECommerce />
            </>
          }
        />
        <Route
          index
          path={`/exams/ssc-cgl/about`}
          element={
            <>
              <PageTitle title="SSC CGL | JobsRealify" />
              <SscCgl />
            </>
          }
        />
        <Route
          index
          path={`/exams/ssc-cgl/pattern`}
          element={
            <>
              <PageTitle title="SSC CGL | JobsRealify" />
              <SscCglPattern />
            </>
          }
        />
        <Route
          index
          path={`/exams/ssc-cgl/jobs`}
          element={
            <>
              <PageTitle title="SSC CGL | JobsRealify" />
              <SscCglJobs />
            </>
          }
        />
        <Route
          index
          path={`/exams/ssc-chsl/about`}
          element={
            <>
              <PageTitle title="SSC CHSL | JobsRealify" />
              <SscChsl />
            </>
          }
        />
        <Route
          index
          path={`/exams/ssc-chsl/pattern`}
          element={
            <>
              <PageTitle title="SSC CHSL | JobsRealify" />
              <SscChslPattern />
            </>
          }
        />
        <Route
          index
          path={`/exams/ssc-chsl/jobs`}
          element={
            <>
              <PageTitle title="SSC CHSL | JobsRealify" />
              <SscChslJobs />
            </>
          }
        />
        <Route
          index
          path={`/exams/jee/about`}
          element={
            <>
              <PageTitle title="JEE | JobsRealify" />
              <Jee />
            </>
          }
        />
        <Route
          index
          path={`/exams/jee/pattern`}
          element={
            <>
              <PageTitle title="JEE | JobsRealify" />
              <JeePattern />
            </>
          }
        />
        <Route
          index
          path={`/exams/jee/jobs`}
          element={
            <>
              <PageTitle title="JEE | JobsRealify" />
              <JeeJobs />
            </>
          }
        />
        <Route
          index
          path={`/exams/upsc/about`}
          element={
            <>
              <PageTitle title="UPSC | JobsRealify" />
              <Upsc />
            </>
          }
        />
        <Route
          index
          path={`/exams/upsc/pattern`}
          element={
            <>
              <PageTitle title="UPSC | JobsRealify" />
              <UpscPattern />
            </>
          }
        />
        <Route
          index
          path={`/exams/upsc/jobs`}
          element={
            <>
              <PageTitle title="UPSC | JobsRealify" />
              <UpscJobs />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="SSC CHSL | JobsRealify" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
