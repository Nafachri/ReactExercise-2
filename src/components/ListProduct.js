import React, { useState } from 'react'

function ListProduct() {

    const [arrBuah, setArrBuah] = useState([
      {buah: "Semangka", harga: "10.000"},
      {buah: "Nanas", harga: "5.000"},
      {buah: "Jeruk", harga: "12.000"},
      {buah: "Kedondong", harga: "10.000"},
      {buah: "Duku Palembang", harga: "11.000"}
    ])
  
    let looping = arrBuah.map(function(value){
        return <Product buah={value.buah} harga={value.harga} />
    })
  
    return(
      <div>
        {/* <Product
        buah={arrBuah[0].buah}
        harga={arrBuah[0].harga}
        />
        <Product 
        buah={arrBuah[1].buah}
        harga={arrBuah[1].harga}
        />
        <Product 
        buah={arrBuah[2].buah}
        harga={arrBuah[2].harga}
        />
        <Product 
        buah={arrBuah[3].buah}
        harga={arrBuah[3].harga}
        />
        <Product 
        buah={arrBuah[4].buah}
        harga={arrBuah[4].harga}
        /> */}
        <p>{looping}</p>
      </div>
    )
  }
  
  function Product(props){
    return(
      <>
      <section className="toko-djaja">
        <h1>Tojo Djaja</h1>
        <table>
          <tr>
          <th>{props.buah}</th>
          </tr>
          <tr>
            <td>{props.harga}</td>
          </tr>
        </table>
      </section>
      </>
    )
  }
  export default ListProduct;