import { useEffect, useState } from "react";

// 4 -  custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - loading
    const [loading, setLoading] = useState(false);

    // 7 - tratando erros
    const [error, setError] = useState(null);

    // 9 - desafio
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            setMethod("POST");
        }else if(method === "DELETE"){
            setConfig({
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setMethod("DELETE");
            setItemId(data)
        }
    }


    useEffect(() => {
        const fetchData = async (e) => {

            setLoading(true)

            try {
                const res = await fetch(url);

                const json = await res.json();
                
                setData(json)
            } catch (error) {
                setError("Houve algum erro ao carregar os dados")
            }

            setLoading(false)
        }
        fetchData();    
    }, [url, callFetch]);

    // 5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            let json
            if(method === "POST"){
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                json = await res.json();
    
            } else if(method === "DELETE") {
                const urlDelete = `${url}/${itemId}`;
                const res = await fetch(urlDelete, config);
                json = await res.json();
            }
            
            setCallFetch(json)
        }

        httpRequest();
    }, [config])

    return { data, httpConfig, loading, error };
}