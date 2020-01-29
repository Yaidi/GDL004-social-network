export const profileEdit = () => {
    const tmpProfile =
        `
 <section id="profile">
 <form>
   <input type="file" accept="image/*" name="photo" id="imageUser">
<label> Nombre</label> 
<input type="text" id="createNameUser">
 <br><br>
 <label> Ocupación </label>
 <input type="text" id="createProfession">
 <button type="submit" id="save">Guardar</button>
 </form>
</section>

 `
    const divElmnt = document.createElement("div")
    divElmnt.innerHTML = viewHome;

    return divElmnt;

    let nameCreate = tmpProfile.querySelector("#createNameUser").value;
    let ocupationCreate = tmpProfile.querySelector("#createProfession").value;
    let descriptionCreate = tmpProfile.querySelector("#descriptionCreate").value;

}