const url = "./assets/datos/BaseTestClothingStore-V1.json"
fetch(url)
    .then(response => response.json())
    .then(data => {
        let container = document.getElementById("portafolioInicio")
        // let plantilla =
        //         `

        //             <img src="${data[0].RutaImagen}" class="img-fluid" alt="">
        //             <div class="portfolio-info">
        //                 <h4>${data[0].NombreArticulo}</h4>
        //                 <p>${data[0].Categoria.toUpperCase()}</p>
        //                 <a href="${data[0].RutaImagen}" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title=" ${data[0].Categoria.toUpperCase()}${data[0].Codigo}"><i class="bx bx-plus"></i></a>
        //                 <a href="" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        //             </div>

        //         `
        //  container.innerHTML += plantilla


        for (let item of data) {

            let plantilla =
                `
                
                <img src="${item.RutaImagen}" class="img-fluid" alt="">
                <div class="portfolio-info">
                <h4>${item.NombreArticulo}</h4>
                <p>${item.Categoria.toUpperCase()}</p>
                <a href="${item.RutaImagen}" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title=" ${item.Categoria.toUpperCase()}${item.Codigo}"><i class="bx bx-plus"></i></a>
                <a href="" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
                
                `

            const div = document.createElement("div");
            div.className = `col-lg-4 col-md-6 portfolio-item filter-${item.Categoria}`;
            div.innerHTML += plantilla;
            container.appendChild(div);
        }

    })