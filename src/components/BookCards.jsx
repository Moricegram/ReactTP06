import "bootstrap/dist/css/bootstrap.min.css";
import ItemCard from "./ItemCard";

const BookCards = () => {
    return (
        <div className="row p-0 ms-0">
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        </div>
   
    );
};

export default BookCards;