const url = "./assets/datos/BaseTestClothingStore-V1.json"
fetch(url)
    .then(response => response.json())
    .then(data => {
        let container = document.getElementById("portafolioInicio")
        for (let item of data) {
            let plantilla =
                `<div class="col-lg-4 col-md-6 portfolio-item filter-${item.Categoria}">
                    <img src="assets/img/Catalogo/hombre/hombre1.png" class="img-fluid" alt="">
                    <div class="portfolio-info">
                        <h4>${item.NombreArticulo}</h4>
                        <p>${item.Categoria.toUpperCase()}</p>
                        <a href="${item.RutaImagen}" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title=" ${item.Categoria.toUpperCase()}${item.Codigo}"><i class="bx bx-plus"></i></a>
                        <a href="" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                </div>`
            container.innerHTML += plantilla
        }

    })