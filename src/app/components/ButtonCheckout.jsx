
"use client";

function ButtonCheckout({priceId}){
    return (
         <button className="bg-sky-500 text-white px-10 py-2 rounded-full"
            onClick={async ()=>{
                const res = await fetch('/api/checkout',{
                    method: 'POST',
                    body: JSON.stringify({
                        priceId
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await res.json()
              window.location.href=data.url
            }}>
            
            Comprar
         
         </button>
    );
}

export default ButtonCheckout