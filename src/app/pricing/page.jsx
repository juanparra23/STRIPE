import { Stripe } from "stripe";
import ButtonCheckout from "../components/ButtonCheckout";

async function loadPrices() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    
    // Obtener los precios
    const pricesData = await stripe.prices.list();

    // Mapear precios para incluir los nombres de los productos
    const pricesWithProductNames = await Promise.all(
        pricesData.data.map(async (price) => {
            // Obtener los detalles del producto
            const product = await stripe.products.retrieve(price.product);
            return {
                id: price.id,
                unit_amount: price.unit_amount,
                currency: price.currency,
                nickname: price.nickname,
                productName: product.name,  // Agregar el nombre del producto
            };
        })
    );

    return pricesWithProductNames;
}

async function PricingPage() {
    // Llamar a loadPrices para obtener precios con nombres de productos
    const prices = await loadPrices();

    return (
        
        
        <div className ="flex justify-center items-center h-screen"> <div>
            <header><h1 className="text-center font-bold my-5">DATAEXPRESS</h1></header>
               <div className="flex gap-x-2">
                {prices.map(price => (
                    <div key={price.id} className=" bg-blue-100 p-6 w-80 h-72 rounded-xl shadow-lg flex flex-col justify-between items-center">
                        <h3 className="text-lg font-semibold">{price.productName}</h3>
                        <h2 className="text-2xl font-bold"><p>Precio: {(price.unit_amount / 100).toFixed(2)} {price.currency.toUpperCase()}</p></h2>
                        <ButtonCheckout priceId={price.id} />
                        
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default PricingPage;
