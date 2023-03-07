function Character({ name, imgUrl, birth, death, race, realm, spouse }) {
    return (
        <div data-test="component-character">
            <h1 data-test="char-name">{name}</h1>
            <img data-test="char-img" src={imgUrl} alt={name}/>
            <li data-test="char-list">
            <ul data-test="char-birth">Date of Birth: {birth}</ul>
            <ul data-test="char-death">Date of Death: {death}</ul>
            <ul data-test="char-race">Race: {race}</ul>
            <ul data-test="char-realm">Realm: {realm}</ul>
            <ul data-test="char-spouse">Spouse: {spouse}</ul>
            </li>
        </div>
    )
}

export default Character;