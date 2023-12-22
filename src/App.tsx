import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { ConfirmPage } from './pages/ConfirmPage'

export default function App() {
    return (
        <BrowserRouter>
            <header className="h-20 bg-primary flex items-center p-4 bg-purple">
                <h1 className="text-3xl text-black">Title</h1>
            </header>
            <main className="flex flex-col p-4 h-full">
                <Switch>
                    <Route path="/login/step-1" component={LoginPage} />
                    <Route path="/login/step-2" component={ConfirmPage} />
                    <Redirect exact from="/" to="/login/step-1" />
                </Switch>
            </main>
        </BrowserRouter>
    )
}
