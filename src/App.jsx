import { GlobalStyle } from "./styles/globalStyles.jsx"

import Layout from "./components/layout/index.jsx"
import IndexPage from "./pages/index.jsx"

function App() {
    return (
        <Layout>
            <GlobalStyle />
            <IndexPage />
        </Layout>
    )
}

export default App
