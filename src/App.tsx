import React from 'react'
import { Toaster } from 'react-hot-toast'


const Page = React.lazy(() => import('./Page.tsx'))

function App() {
    return (

            <React.Suspense fallback={<></>}>
                <Toaster position='top-center'/>
                <Page />
            </React.Suspense>

    )
}

export default App