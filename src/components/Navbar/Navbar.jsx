
const Navbar = ({ route }) => {
    const { path, element } = route
    return (
        <div className="">
            <div className="font-semibold">
                <a href={element}>{path}</a>
            </div>
        </div>

    );
};

export default Navbar;