import {
  AcademicCapIcon,
  CalculatorIcon,
  CogIcon,
  HomeIcon,
  LibraryIcon,
  MailIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React, { useContext, useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import { UserContext } from "../../App";
import { logOut } from "../../auth";
import ActivityIndicator from "../../components/ActivityIndicator";
import HeaderBar from "../../components/HeaderBar";
import Sidebar from "../../components/Sidebar";
import Activities from "./Activities";
import Feedback from "./Feedback";
import Groups from "./Groups";
import LAs from "./LAs";
import Lecturers from "./Lecturers";
import Overview from "./Overview";
import Settings from "./Settings";
import TAs from "./TAs";
import Venues from "./Venues";

export default function Dashboard() {
  const history = useHistory();
  const user = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  function _logOut() {
    logOut().then((_) => history.push("/login"));
  }

  function listenForUser() {
    if (!user.dirty && user.dirty !== undefined) {
      if (user.uid) setLoading(false);
      if (!user.uid) history.push("/login");
    } else {
      setLoading(true);
    }
  }

  useEffect(listenForUser, [user, history]);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <div className="h-screen w-screen px-10 py-16  bg-gradient-conic-r from-indigo-200 via-blue-gray-600 to-indigo-200">
      <div className="flex rounded-3xl bg-gray-50 shadow-2xl h-full items-stretch">
        <Sidebar
          basePath="dashboard"
          menuMapArray={[
            {
              name: "Overview",
              icon: (
                <HomeIcon className="h-5 w-5" viewBox="0 0 20 20"></HomeIcon>
              ),
              path: "/",
            },
            {
              name: "Lecturers",
              icon: (
                <UserGroupIcon
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                ></UserGroupIcon>
              ),
              path: "/lecturers",
            },
            {
              name: "Teaching Assistants",
              icon: (
                <PresentationChartLineIcon
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                ></PresentationChartLineIcon>
              ),
              path: "/teaching_assistants",
            },
            {
              name: "Lab Assistants",
              icon: (
                <CalculatorIcon
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                ></CalculatorIcon>
              ),
              path: "/lab_assistants",
            },
            {
              name: "Activities",
              icon: (
                <AcademicCapIcon
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                ></AcademicCapIcon>
              ),
              path: "/activities",
            },
            {
              name: "Venues",
              icon: (
                <LibraryIcon
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                ></LibraryIcon>
              ),
              path: "/venues",
            },
            {
              name: "Groups",
              icon: (
                <UsersIcon className="h-5 w-5" viewBox="0 0 20 20"></UsersIcon>
              ),
              path: "/groups",
            },
            {
              name: "Settings",
              icon: <CogIcon className="h-5 w-5" viewBox="0 0 20 20"></CogIcon>,
              path: "/settings",
            },
            {
              name: "Feedback",
              icon: (
                <MailIcon className="h-5 w-5" viewBox="0 0 20 20"></MailIcon>
              ),
              path: "/feedback",
            },
          ]}
        ></Sidebar>

        <div className="flex flex-col flex-1 w-full rounded-tr-2xl">
          <HeaderBar username={user.email} onClick={_logOut} />
          <div className="bg-gray-100 h-full rounded-br-2xl">
            <Switch>
              <Route path="/dashboard/lecturers" exact component={Lecturers} />
              <Route
                path="/dashboard/activities"
                exact
                component={Activities}
              />
              <Route path="/dashboard/groups" exact component={Groups} />
              <Route path="/dashboard/settings" exact component={Settings} />
              <Route path="/dashboard/feedback" exact component={Feedback} />
              <Route path="/dashboard/venues" exact component={Venues} />
              <Route
                path="/dashboard/teaching_assistants"
                exact
                component={TAs}
              />
              <Route path="/dashboard/lab_assistants" exact component={LAs} />

              <Route path="/dashboard/" exact component={Overview} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
