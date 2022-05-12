import { atom } from "recoil";

const confirmDialogState= atom({
    key: 'CONFIRMDIALOGSTATE',
    default: false,
});

const courseIdState= atom({
    key: 'COURSEID',
    default : null
})

const courseDataState= atom(
    {
        key:'COURSEDATA',
        default : null,
    }
)

export {
    confirmDialogState,
    courseIdState,
    courseDataState
}