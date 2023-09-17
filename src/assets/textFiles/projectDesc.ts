import { ProjectInfo } from "../../types/types"
import clothingStoreimg from '../projectImg/clothin-store.png'
import roomsChatimg from '../projectImg/rooms-chat.png'
import itemslistimg from '../projectImg/itemslist.png'

export const roomsChat:ProjectInfo = {
    projectImg:roomsChatimg,
    title: 'Rooms',
    about: `Real time chat app, where you can create a user, create chat rooms, 
    join them and chat with real time functionality,
    made using NextJs, TypeScript,
    NextAuth for authentication, upstash Redis for a databse and pusher chanels for the real time features`,
    stack: ['TypeScript','NextJs','NexAuth','Redis'],
    url: 'https://rooms-chat.vercel.app',
    githubUrl:'https://github.com/qety4/rooms-chat'
}

export const clothingStore: ProjectInfo = {
    projectImg: clothingStoreimg,
    title: 'Clothing Store',
    about: `Fully functional, responsive, online commerce application.
    It allows for:
    adding items to cart (which
    persists upon reloading the browser),
    logging in users and having a profile.
    Browsing all items and searching for any existing ones.
    Built with React and react-router-dom,
    using Firebase as a database.`,
    stack: ['TypeScript', 'React-Router-Dom', 'Firebase'],
    url: 'https://clothing-store-ts.vercel.app',
    githubUrl:'https://github.com/qety4/clothing-store-ts'
}

export const itemslist:ProjectInfo = {
    projectImg: itemslistimg,
    title: 'itemslist',
    about: `Online Marketplace app, craigslists "clone",
    Add posts of different categories, search the whole app
    for specific items. Uses infinite scroll to display posts.
    Built with: NextJs app router, Typescript,Prisma,supabase PSQL.`,
    stack: ['TypeScript', 'NextJs', 'Prisma', 'PSQL'],
    url: 'https://itemslist.vercel.app',
    githubUrl:'https://github.com/qety4/itemslist'
}


