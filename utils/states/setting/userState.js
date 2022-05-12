import { atom } from "recoil";

const userState = atom({
    key: 'USER_STATE',
    default:{},
})

export {
    userState
}