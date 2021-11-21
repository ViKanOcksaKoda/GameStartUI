import CarouselSlider from "../carousel/CarouselSlider";
import Service from "../../service";
import { useEffect, useState } from "react";
// import axios from "axios";

const HomePage = () => {

    const baseURL = "https://localhost:7024/api/";

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

    const [productName, setProductName] = useState();
    const [Name, setName] = useState();
    const [Price, setPrice] = useState();
    const [Id, setId] = useState();
    const [Description, setDescription] = useState();
    const [Quantity, setQuantity] = useState();

    const getProduct = (id) => {
        Service.GetProductById(id)
            .then((res) => {
                setProductName(res.data);
                console.log(productName);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getProduct(2);
    }, []);


    
        useEffect(() => {
            fetch(baseURL + "products/2")
                .then(response => response.json())
                .then(data => {
                    setName(data.name);
                    setPrice(data.price);
                    setId(data.id);
                    setDescription(data.description);
                    setQuantity(data.stockBalance);

                    console.log("Namn: " + Name);
                    console.log("Price: " + Price);
                    console.log("ID: " + Id);
                    console.log("Description: " + Description);
                    console.log("Quantity: " + Quantity);
                })
        }, []);

    return (
        <>
            <CarouselSlider />
        </>
    );
}

export default HomePage;