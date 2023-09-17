import React from 'react'
import Loader from './Components/Loader/Loader.tsx'
import { Toaster } from 'react-hot-toast'

const Page = React.lazy(() => import('./Page.tsx'))

function App() {
    return (
        <>
            <React.Suspense fallback={<Loader />}>
                <Toaster position='top-center'/>
                <Page />
            </React.Suspense>
        </>
    )
}

export default App