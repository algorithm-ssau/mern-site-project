import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AdsList } from '../components/AdsList'
import { Loader } from '../components/Loader'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export const AdsPage = () => {
    const [ads, setAds] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchAds = useCallback(async () => {
        try {
            const fetched = await request("/api/ad", "GET", null, {
                Authorization: `Bearer ${token}`
            })
            setAds(fetched)
        } catch(e) {}
    }, [token, request])

    useEffect(() => {
        fetchAds()
    }, [fetchAds])

    if (loading){
        return <Loader/>
    }
    return (
        <div className="container">
            {!loading && <AdsList ads={ads}/>}
        </div>
    )
}