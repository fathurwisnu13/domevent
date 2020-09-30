
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