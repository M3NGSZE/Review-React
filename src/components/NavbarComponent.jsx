import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import ButtonComponent from "./ButtonComponent";

const NavbarComponent = () => {
    return (
        <>
            <Navbar >
                <NavbarBrand href="https://flowbite-react.com">
                    <img src="/src/assets/react.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </NavbarBrand>

                <ButtonComponent title="Login" onClick={() => alert("login")}/>

                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink href="#" active>
                        Home
                    </NavbarLink>
                    <NavbarLink href="#">
                        About
                    </NavbarLink>
                    <NavbarLink href="#">Services</NavbarLink>
                    <NavbarLink href="#">Pricing</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}

export default NavbarComponent