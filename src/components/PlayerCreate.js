function PlayerCreate() {
    const positionOptions = (
        <>
            <option value="Pitcher">Pitcher</option>
            <option value="Catcher">Catcher</option>
            <option value="1st base">1st base</option>
            <option value="2nd base">2nd base</option>
            <option value="3rd base">3rd base</option>
            <option value="Shortstop">Shortstop</option>
            <option value="Left field">Left field</option>
            <option value="Left center">Left center</option>
            <option value="Right center">Right center</option>
            <option value="Right field">Right field</option>
        </>
    );

    return (
        <div>
            <form>
                <label>Name</label>
                <input />
                <label>Gender</label>
                <label>Email</label>
                <input />
                <label>Phone</label>
                <input />
                <label>Position - 1st choice</label>
                <select>{positionOptions}</select>
                <label>Position - 2nd choice</label>
                <select>{positionOptions}</select>
                <label>Position - 3rd choice</label>
                <select>{positionOptions}</select>
                <button>Add player</button>
            </form>
        </div>
    )
}

export default PlayerCreate;