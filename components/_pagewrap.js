import Nav from './header'

export default function PageWrapper({ children }) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}