import chars from "../data/characterData.json";
import Character from "./Character";

function CharacterGallery({ name, imgUrl, birth, death, race, realm, spouse }) {
    return (
        <div data-test="component-char-gallery">
            {chars.map(c => (
                <Character key={c._id} {...c} />
            ))}
        </div>
    )
}

export default CharacterGallery;