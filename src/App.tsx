import React from 'react'
import Loader from './Components/Loader/Loader.tsx'

const Page = React.lazy(() => import('./Page.tsx'))

function App() {
    return (
        <>
            <React.Suspense fallback={<Loader />}>
                <Page />
            </React.Suspense>
        </>
    )
}

export default App