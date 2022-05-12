import { atom } from "recoil";

const menuState= atom({
    key: 'MENU_STATE',
    default: 0,
})
const courseId=atom({
    key: 'COURSEID',
    default : null,
})

export {
    menuState
}