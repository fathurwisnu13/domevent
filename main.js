
//buat function untuk memunculkan MODAL
const showModal = ()=>{
    //kita dapatkan element MODAL yg mau dimunculkan
    let modal = document.getElementById("modalMenu")

    //kita atur styling element Modalnya
    modal.style.display = "flex"


}

const closeModal = ()=>{

    let modal = document.getElementById("modalMenu")
    modal.style.display = "none"

}
//kita ambil data alamat by id
let showcase = document.querySelector(".wrapper_showcase")

//kita inject elemetnya dengan syntax html
//showcase.innerHTML += `
//<img src="https://picsum.photos/seed/24/300" alt="ini gambar" />
//`
for (var i = 0 ; i < 30 ; i++){
    showcase.innerHTML += `
    <img src="https://picsum.photos/seed/${1+i}/200" alt="gambar ke ${1+i}" />

    `
}
