import Footer from "../components/Footer";
import Header from "../components/Header";
import Backgrounds from "./Backgrounds";
import Cards from "./Charecters";
import Hero from "./Hero";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Cards />
            <Backgrounds />
            <Footer />
        </div>
    )
}