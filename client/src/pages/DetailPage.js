import React from 'react';
import {useParams} from "react-router-dom"
import { AdDetailsCard } from '../components/AdDetailsCard'
import { Loader } from '../components/Loader'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export const DetailPage = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [ad, setAd] = useState(null)
    const adId = useParams().id

    const getAd = useCallback(async () => {
        try{
            const fetched = await request(`/api/ad/${adId}`, "GET", null, {
                Authorization: `Bearer ${token}`
            })
            setAd(fetched)
        } catch (e){}
    }, [token, adId, request])

    useEffect(() => {
        getAd()
    }, [getAd])

    if (loading) {
        return <Loader/>
    }
    return (
        <>
            { !loading && ad && <AdDetailsCard ad={ad} />}
        </>
    )
}