import axios from 'axios';
import {useEffect, useState} from 'react';
import ApiConn from '../Commons/api'

export default function useAPI(endpoint){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData(){
            setLoading(true);

            try {
                const response = await 
                ApiConn.get(endpoint);
                setData(response.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    return {
        data,
        loading,
    };
}