import Settings from "layouts/pages/account/settings";
import MyCourses from "student/MyCourses";
import AllCourses from "teacher/AllCourses";
import MyTasks from "student/MyTasks";
import Kanban from "student/kanban";
import DataTables from "teacher/data-tables";

import MDAvatar from "components/MDAvatar";
import Icon from "@mui/material/Icon";
import profilePicture from "assets/images/team-3.jpg";

const routes = [
  {
    type: "collapse",
    name: "Brooklyn Alice",
    key: "brooklyn-alice",
    icon: <MDAvatar src={profilePicture} alt="Brooklyn Alice" size="sm" />,
    collapse: [
      {
        name: "Settings",
        key: "profile-settings",
        route: "/pages/account/settings",
        component: <Settings />,
        protected: true,
        allowedRoles: ["student", "teacher"],
      },
    ],
  },

  { type: "divider", key: "divider-0" },
  { type: "title", title: "Pages", key: "title-pages" },

  {
    type: "collapse",
    name: "My Courses",
    key: "my-courses",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/student/my-courses",
    component: <MyCourses />,
    noCollapse: true,
    protected: true,
    allowedRoles: ["student"],
  },
  {
    type: "collapse",
    name: "My Tasks",
    key: "my-tasks",
    icon: <Icon fontSize="small">content_paste</Icon>,
    route: "/student/my-tasks",
    component: <MyTasks />,
    noCollapse: true,
    protected: true,
    allowedRoles: ["student"],
  },
  {
    type: "collapse",
    name: "Kanban",
    key: "kanban",
    icon: <Icon fontSize="small">view_kanban</Icon>,
    route: "/student/kanban",
    component: <Kanban />,
    noCollapse: true,
    protected: true,
    allowedRoles: ["student"],
  },
  {
    type: "collapse",
    name: "All Courses",
    key: "all-courses",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/teacher/all-courses",
    component: <AllCourses />,
    noCollapse: true,
    protected: true,
    allowedRoles: ["teacher"],
  },
  {
    type: "collapse",
    name: "All Students",
    key: "all-students",
    icon: <Icon fontSize="small">people_alt</Icon>,
    route: "/teacher/all-students",
    component: <DataTables />,
    noCollapse: true,
    protected: true,
    allowedRoles: ["teacher"],
  },
];

export default routes;
