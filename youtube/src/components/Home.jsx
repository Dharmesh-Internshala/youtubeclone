import React from "react";
import Sidebar from "./sidebar";
import { useAuth } from "../context/AuthProvider";
import Video from "./video";
import ListItems from "./ListItems";

function Home() {
    const { data, loading } = useAuth();
    console.log(data);
    return (
        <>
            <div className="main-container">
                <Sidebar />
                <div className="content-container">
                    <ListItems />
                    <div className="video-grid">
                        {!loading &&
                            data.map((item) => {
                                if (item.type !== "video") return null;
                                return <Video key={item.id} video={item?.video} />;
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home


