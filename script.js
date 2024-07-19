document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', function() {
        const productType = this.dataset.product;
        document.getElementById('product-image').src = productType + '.png';
        document.getElementById('product-selection').style.display = 'none';
        document.getElementById('customizer').style.display = 'block';

        const productSpecificFields = document.getElementById('product-specific-fields');
        productSpecificFields.innerHTML = '';

        if (productType === 'camiseta' || productType === 'gorro') {
            productSpecificFields.innerHTML = `
                <label for="shirt-size-input">Talla:</label>
                <select id="shirt-size-input">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <label for="shirt-color-input">Color de la prenda:</label>
                <div id="shirt-colors">
                    <div class="color-option" data-color="#ffffff" style="background-color: #ffffff;"></div>
                    <div class="color-option" data-color="#000000" style="background-color: #000000;"></div>
                    <div class="color-option" data-color="#ff0000" style="background-color: #ff0000;"></div>
                    <div class="color-option" data-color="#0000ff" style="background-color: #0000ff;"></div>
                    <div class="color-option" data-color="#00ff00" style="background-color: #00ff00;"></div>
                </div>
            `;

            document.querySelectorAll('.color-option').forEach(colorOption => {
                colorOption.addEventListener('click', function() {
                    document.querySelectorAll('.color-option').forEach(co => co.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        } else if (productType === 'taza') {
            productSpecificFields.innerHTML = `
                <label for="mug-color-input">Color de la taza:</label>
                <div id="mug-colors">
                    <div class="color-option" data-color="#ffffff" style="background-color: #ffffff;"></div>
                    <div class="color-option" data-color="#000000" style="background-color: #000000;"></div>
                    <div class="color-option" data-color="#ff0000" style="background-color: #ff0000;"></div>
                    <div class="color-option" data-color="#0000ff" style="background-color: #0000ff;"></div>
                    <div class="color-option" data-color="#00ff00" style="background-color: #00ff00;"></div>
                </div>
            `;

            document.querySelectorAll('.color-option').forEach(colorOption => {
                colorOption.addEventListener('click', function() {
                    document.querySelectorAll('.color-option').forEach(co => co.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        } else if (productType === 'poster') {
            productSpecificFields.innerHTML = `
                <label for="poster-size-input">Tamaño del póster (en cm):</label>
                <input type="text" id="poster-size-input" placeholder="Ej: 30x40">
                <label for="poster-paper-type-input">Tipo de papel:</label>
                <select id="poster-paper-type-input">
                    <option value="mate">Mate</option>
                    <option value="brillante">Brillante</option>
                </select>
            `;
        }
        
    });
});

document.getElementById('apply-button').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const colorInput = document.getElementById('color-input').value;
    const fontSizeInput = document.getElementById('font-size-input').value;
    
    const customTextDiv = document.getElementById('custom-text');
    customTextDiv.textContent = textInput;
    customTextDiv.style.color = colorInput;
    customTextDiv.style.fontSize = fontSizeInput + 'px';

    const productImage = document.getElementById('product-image');
    const productImageContainer = document.getElementById('product-image-container');

    let selectedColorOption = document.querySelector('.color-option.selected');
    if (selectedColorOption) {
        let selectedColor = selectedColorOption.dataset.color;
        productImageContainer.style.backgroundColor = selectedColor;
    }

});
