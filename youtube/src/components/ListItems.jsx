import React from "react";

function ListItems() {
    const categories = [
        "All",
        "Music",
        "React routers",
        "Computer programming",
        "Reverberation",
        "Movie musicals",
        "India national cricket team",
        "News",
        "Mixes",
        "1990s",
        "Telugu cinema",
        "Live",
        "Dramedy",
        "Dubbing",
        "Indian soap opera",
        "Cricket",
        "Football",
        "Learn Coding",
    ];


    return (
        <>
            <div className="category-container">
                <div className="category-list">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="category-item"
                        >
                            {category}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListItems;


