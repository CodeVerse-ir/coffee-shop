export default function overlay({ handleToggleNav, handleToggleCart, openNavbar, openCart }) {
    return (
        <div className={`overlay ${openNavbar || openCart ? "overlay--visible" : ""}`} onClick={openNavbar ? handleToggleNav : handleToggleCart}></div>
    )
}

