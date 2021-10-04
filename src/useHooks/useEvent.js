import { useEffect, useState } from "react"

const useCourses = () => {
    const [events, setevents] = useState([]);
    useEffect(() => {
        fetch('./img_db.json')
            .then(res => res.json())
            .then(data => {
                setevents(data)

            })

    }, [])
    return [events];
}
export default useCourses;