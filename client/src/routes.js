import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AdsPage } from './pages/AdsPage'
import { AuthPage } from './pages/AuthPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { MainPage } from './pages/MainPage'
import { MyAdsPage } from './pages/MyAdsPage'

export const useRoutes = isAutenticated => {
    if (isAutenticated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/ads" exact>
                    <AdsPage />
                </Route>
                <Route path="/myads" exact>
                    <MyAdsPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}