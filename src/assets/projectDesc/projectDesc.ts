import { ProjectInfo } from "../../types/types"
import clothingStoreimg from '../projectImg/clothin-store.png'

export const clothingStore:ProjectInfo={
    projectImg:clothingStoreimg ,
    title:'Clothing Store',
    about:`Full functionality, responsive, online commerce application.
    It allows for:
    adding items to cart (which
    persists upon reloading the browser),
    logging in users and having a profile,
    checkout with stripe and serverless functions.
    Built with React and react-router-dom,
    with Firebase as a database.`,
    stack:['Javascript','React-Router-Dom','Firebase','Sass'],
    side:'right',
    link:'right',
}

export const clothingStoreL:ProjectInfo={
    projectImg:clothingStoreimg ,
    title:'Clothing Store',
    about:`Full functionality, responsive, online commerce application.
    It allows for:
    adding items to cart (which
    persists upon reloading the browser),
    logging in users and having a profile,
    checkout with stripe and serverless functions.
    Built with React and react-router-dom,
    with Firebase as a database.`,
    stack:['Javascript','React-Router-Dom','Firebase','Sass'],
    side:'left',
    link:'right',
}

export const itemslist ={
    projectImg:'' ,
    title:'itemslist',
    about:`Online Marketplace app, craigslists "clone",
    Add posts of different categories, search the whole app
    for specific items. Uses infinite scroll to display posts.
    Built with: NextJs app router, Typescript,Supabase Prisma, PSQL.     
    `,
    stack:['TypeScript','NextJs','Prisma','PSQL'],
    side:'left',
    link:''
}
