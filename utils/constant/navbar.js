import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import VerticalSplitRoundedIcon from '@mui/icons-material/VerticalSplitRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';


const navItems = [
  {
    icon: <HomeRoundedIcon />,
    title: 'Home',
    path: '/home',
  },
  {
    icon: <VerticalSplitRoundedIcon />,
    title: 'New Feed',
    path: '/information',
  },
  {
    icon: <EventNoteRoundedIcon />,
    title: 'Upcoming Event',
    path: '/event',
  },
  {
    icon: <ImageRoundedIcon />,
    title: 'Story',
    path: '/story',
  },
  {
    icon: <PeopleAltRoundedIcon />,
    title: 'Student',
    path: '/student',
  },
  {
    icon: <ForumRoundedIcon />,
    title: 'Community',
    path: '/community',
  },
];

export {
  navItems,
};
