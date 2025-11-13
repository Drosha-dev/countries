import Country from "./Country";

const Favorites = ({ favorites }) => {


    console.log(favorites);


    return (<>

        <div>
            <h1>Favorite List</h1>
            {
                favorites.length > 0 ? (
                    favorites.map((f) => (<><p>{f.country.name.common}</p>
                    <button></button>
                    
                    </> ))
                ) : (
                    <p>No favorites yet</p>
                )
            }


        </div>

    </>)
}

export default Favorites