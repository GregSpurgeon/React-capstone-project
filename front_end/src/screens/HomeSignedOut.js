import React from "react"
import { GroupGridContainer } from '../components/group-grid'
import './Home.css'
import { NavigationBar } from "../components/navigationBar"
import { FooterPage } from "../components/footer"
import { NSIHomeBanner } from "../components/nsi_homeBanner"
import { MostRecentUsers } from "../components/most-recent-users"

export const HomeSignedOut = () => (
    <div className="home">
        <NavigationBar />
        <NSIHomeBanner />
        <GroupGridContainer />
        <MostRecentUsers />
        <FooterPage />
    </div>
)