import HomeIcon from "@mui/icons-material/Home";
import { Dashboard } from "@mui/icons-material";
import ClassRoundedIcon from "@mui/icons-material/ClassRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
const navItems = [
  {
    icon: <Dashboard />,
    label: "course",
    path: "/courses",
    sublist: [],
  },
  {
    icon: <Dashboard />,
    label: "class",
    path: "/classes",
    sublist: [],
  },
  {
    icon: <HomeIcon />,
    label: "certificate",
    path: "/certificate",
    sublist: [],
  },
];

const data_courses = [
  {
    name: "Web Development",
    sub: [
      {
        name: "Express Course",
      },
      {
        name: "Computer Science Discoveries",
      },
      {
        name: "Basic Web Development",
      },
      {
        name: "Basic Front End Development",
      },
      {
        name: "Front End Development",
      },
      {
        name: "Advance Front End",
      },
      {
        name: "Backend Firebase",
      },
      {
        name: "Backend RestAPI",
      },
      {
        name: "Backend GraphAPI",
      },
    ],
  },
  {
    name: "Robotic",
    sub: [
      {
        name: "Python",
      },
      {
        name: "Micro:bit",
      },
    ],
  },
  {
    name: "Data Science",
    sub: [{ name: "Python" }],
  },
];
const coachMenuItems = [
  {
    label: "Class",
    icon: <ClassRoundedIcon style={{ fontSize: 25 }} />,
    path: "/classes",
  },
  {
    label: "Inventory",
    icon: <Inventory2RoundedIcon style={{ fontSize: 25 }} />,
    path: "/inventory",
  },
  {
    label: "Coach",
    icon: <AccountBoxRoundedIcon style={{ fontSize: 25 }} />,
    path: "/coaches",
  },
  {
    label: "Personal info",
    icon: <AccountCircleIcon style={{ fontSize: 25 }} />,
    path: "/setting/personal",
  },
  {
    label: "Password",
    icon: <HttpsIcon style={{ fontSize: 25 }} />,
    path: "/setting/password",
  },
  {
    label: "Notifications",
    icon: <CircleNotificationsIcon style={{ fontSize: 25 }} />,
    path: "/setting/notification",
  },

];

const classMenuItems = [
  {
    label: "Stream",
    icon: null,
    path: "/classes/stream",
  },
  {
    label: "Lessons",
    icon: null,
    path: "/classes/lessons",
  },
  {
    label: "Classwork",
    icon: null,
    path: "/classes/classwork",
  },
  {
    label: "Students",
    icon: null,
    path: "/classes/students",
  },
  {
    label: "Grade",
    icon: null,
    path: "/classes/grade",
  },
];
const classMenuItemsForSutdent = [
  {
    label: "Stream",
    icon: null,
    path: "/classes/stream",
  },
  {
    label: "Lessons",
    icon: null,
    path: "/classes/lessons",
  },
  {
    label: "Classwork",
    icon: null,
    path: "/classes/classwork",
  },
  {
    label: "Students",
    icon: null,
    path: "/classes/students",
  },
];



export {
  navItems,
  data_courses,
  coachMenuItems,
  classMenuItems,
  classMenuItemsForSutdent,
  
};
