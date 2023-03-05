import React from "react";
import FilterBar from "../filters/filterBar";

const ArticlesContainer = () => {
    return (
        <section className="spacer__pb--xl spacer__pt--xl">
            <div>
                <div className="line__separator line__separator--gradient--normal spacer__mb--sm"></div>
                <h3 className="text--bold text--lg spacer__pb--md">Find your next place to live</h3>
            </div>
            <FilterBar />
        </section>
    )
}

export default ArticlesContainer;