import NavbarAlert from "./Navbar-alert";
import Navbar from "./Navbar";

export default function MainNavbar() {
    return (
        <header className="sticky top-0 z-[100] w-full flex flex-col">
            <NavbarAlert />
            <Navbar />
        </header>
    );
}
