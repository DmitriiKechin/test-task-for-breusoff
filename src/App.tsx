import React from "react";
import {CommentsPage} from "./pages/comments";
import {Provider} from "react-redux";
import {store} from "./store";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {GlobalStyle} from "./styles/globalStyles";
import {Reset} from "styled-reset";
import {Layout} from "./modules/layout";

const client = new QueryClient();

function App() {
    return (
        <Provider store={store}>
            <Reset />
            <GlobalStyle />
            <QueryClientProvider client={client}>
                <Layout>
                    <CommentsPage />
                </Layout>
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
