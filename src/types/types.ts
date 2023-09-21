import React from "react"

export type ProjectInfo = {
    projectImg: string,
    title: string,
    about: string,
    stack: string[],
    url:string,
    githubUrl: string
}

export type ModalProps = {
    projectInfo : ProjectInfo,
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}