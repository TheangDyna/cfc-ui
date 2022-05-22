import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const footerLink = {
    licence: '@2020 CFC Alumni',
    link: [
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Location',
            path: '/about/#location',
        },
        {
            title: 'Feedback',
            path: '/contact/#feedback',
        },
        {
            title: 'Policy',
            path: '/about/#policy',
        },
        {
            title: 'Donate',
            path: '/donate',
        },
    ],
    email: 'cfcalumni@gmail.com',
    icon: [
        
        {
            icon: <TelegramIcon />,
            title: 't.me/cfcalumni',
        },
        {
            icon: <FacebookRoundedIcon />,
            title: 'CFC Alumni',
        },
        {
            icon: <LocalPhoneRoundedIcon />,
            title: '(+855) 12 345 678',
        },
    ],
}

export {
    footerLink,
}