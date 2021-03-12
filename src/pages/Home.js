import {Header, MainSection, Footer} from "../components/ui";
import '../App.css';

export const Home = () => (
    <>
        <Header/>
        <div className="p-2">
            <h1 className="text-4xl">Welcome to ASIC IP Finder</h1>
        </div>
        <MainSection/>
        <Footer/>
    </>

)