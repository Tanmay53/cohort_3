import React, { useEffect, useState } from 'react'
import axios from "axios"

const Folders = () => {
    const [data, setData] = useState([])
    const [curr, setCurr] = useState("/")
    const [folder_name, setFolder] = useState("")
    const [arrStack, setStack] = useState(["/"])
    const response = (url, urldata) => {
        const config = {
            baseURL: "http://127.0.0.1:5000/",
            method: "POST",
            url: url,
            headers: { "Content-Type": "application/json" },
            data: urldata
        }
        return config
    }
    const response_result = () => {
        const conf = response("get_folder", { "cur_fol_path": curr })
        axios(conf)
            .then(res => {
                setData(res.data.data)
            })
    }
    useEffect(() => {
        response_result()

    }, [curr])
    const createFolder = () => {
        if (folder_name !== "") {
            const data = {
                "folder_name": folder_name,
                "cur_fol_path": curr
            }
            const conf = response("folder", data)
            axios(conf)
                .then(res => {
                    response_result()
                })
        }
    }
    const getBack = () => {
        let stack = arrStack
        let top = stack.length - 1
        const top_url = stack[top]
        if (top_url == "/") {
            alert("Root")
        }
        else {
            const lst = arrStack
            lst.pop()
            const last_url = lst[lst.length - 1]
            setCurr(last_url)
            response_result()
        }
    }
    return (<>
        <button onClick={getBack} className="btn btn-outline-dark mx-5">BACK</button>
        <div className="p-5 container">

            <div className="border row px-4 py-4 bg-light text-left py-2">
                <h2 className="my-3 text-left col-12">Create New Folder</h2>
                <input onChange={(e) => setFolder(e.target.value)} type="text" className="form-control justify-content-center my-1 mx-1 col-12 col-lg-6 col-md-6" />
                <button className="btn btn-success col-lg-4 col-md-4 my-1 p-2 mx-1 col-12" onClick={() => createFolder()}>Create</button>
            </div>
            <div className="row justify-content-center">
                {data && data.map(folder => {
                    return <div key={folder.id} id={folder.id} className="col-4 justify-content-center d-flex flex-column ">
                        <img onClick={(e) => {
                            if (curr == "/") {
                                setCurr(curr + String(e.target.id))
                                const cur = curr + String(e.target.id)
                                setStack([...arrStack, cur])

                            }
                            else {
                                let last = curr + "/" + String(e.target.id)
                                setCurr(last)
                                setStack([...arrStack, last])
                            }

                        }} id={folder.id} src="/folder.svg" alt="folder" className="img-fluid border border-white" />
                        <h3 className="text-center">{folder.folder_name}</h3>
                    </div>
                })}
            </div>
        </div>
    </>
    )
}

export default Folders
