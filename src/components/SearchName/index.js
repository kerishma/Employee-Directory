import React, { useContext } from "react";
import DataAreaContext from "../../units/DataAreaContext";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="searchB">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2" 
                    type="search" 
                    onChange={e => context.handleSearchChange(e)}
                
                />
                <button className="btn my-2 my-sm-0" 
                        type="submit">
                        Search
                </button>
            </form>
        </div>
    );
}
export default SearchName;