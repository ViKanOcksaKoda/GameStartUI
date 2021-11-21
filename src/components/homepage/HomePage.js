import CarouselSlider from "../carousel/CarouselSlider";
import Service from "../../service";
import { useEffect } from "react";
// import axios from "axios";

const HomePage = () => {

    // const baseURL = "https://localhost:7024/api/products/1";

    // useEffect(() => {
    //     axios.get(baseURL).then((response) => {
    //         console.log(response);
    //     });
    // }, []);

    //KODEN OVAN FUNKAR, MEN RESULTATET BEHÖVS KOLLAS ÖVER -- TRIM MUCH FAT YES.

    // useEffect(() => {
    //     const response = fetch(baseURL)
    //     .then(response => response.json())
    //     .then(data => console.log(data));


    //     });

    //KOD OVAN FUNKAR BÄTTRE MEN JAG GILLAR DEN MINDRE. RESULTATET VERY NICE THOUGH.

    // const GetProduct = () => {
    //     Service.GetAllCategories();
    // };

    // console.log(Service.GetProductById(2));

    return( 
        <CarouselSlider/>
    );
}

export default HomePage;