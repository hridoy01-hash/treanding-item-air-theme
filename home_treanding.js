(async function () {
    const BUSINESS_ID = "6304aa113cb8eba9248eac8d";
    let CURRENCY = "BDT";
    const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };

    const treandingProduct = await LoadDataFunction(`https://api.soppiya.com/v2.1/widget/home/trending`);

    async function showTreandingItem(treandingProduct) {

        for (let i = 0; i < treandingProduct.length; i++) {
            const singleProduct = treandingProduct[i];
            // console.log("singleProduct", singleProduct);
            let FeatureImage = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${singleProduct?._id}/${singleProduct?.image}`;

            const s0407_trending_items_single_product = elementMaker("div", ["s0407_trending_items_single_product"]);
            const s0407_product_inner_content_wrapper = elementMaker("div", ["s0407_product_inner_content_wrapper"]);
            s0407_trending_items_single_product.appendChild(s0407_product_inner_content_wrapper);

            const s0407_product_image = elementMaker("div", ["s0407_product_image"]);
            s0407_product_inner_content_wrapper.appendChild(s0407_product_image);
            const productImage = elementMaker("img", ["product_img"]);
            setAttributes(productImage, { "src": `${FeatureImage}` });
            s0407_product_image.appendChild(productImage);

            const s0407_wishlist_and_cart_area = elementMaker("div", ["s0407_wishlist_and_cart_area"]);
            s0407_product_inner_content_wrapper.appendChild(s0407_wishlist_and_cart_area);
            const s0407_wishlist_icon_wrapper = elementMaker("div", ["s0407_wishlist_icon_wrapper"]);
            s0407_wishlist_and_cart_area.appendChild(s0407_wishlist_icon_wrapper);
            const s0407_wishlist_icon = elementMaker("span", ["s0407_wishlist_icon"]);
            s0407_wishlist_icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14.359"
                                        viewBox="0 0 15 14.359">
                                        <g id="Wishlist" transform="translate(1 1)">
                                            <g id="Wishlist-2" data-name="Wishlist" transform="translate(0.005 -0.917)"
                                                fill="none">
                                                <path
                                                    d="M9.473.917A3.465,3.465,0,0,0,6.5,2.705,3.465,3.465,0,0,0,3.517.917,3.684,3.684,0,0,0,0,4.737c0,3.671,5.932,7.912,6.184,8.091l.313.222.313-.222c.252-.179,6.184-4.42,6.184-8.091A3.684,3.684,0,0,0,9.473.917Z"
                                                    stroke="none" />
                                                <path
                                                    d="M 3.517133712768555 0.9169940948486328 C 1.493824005126953 1.004974365234375 -0.07862663269042969 2.711864471435547 -0.002256393432617188 4.737284660339355 C -0.002256393432617188 8.408554077148438 5.929803848266602 12.64879417419434 6.182113647460938 12.82870483398438 L 6.495073795318604 13.05033493041992 L 6.808023929595947 12.82870483398438 C 7.060343742370605 12.64987468719482 12.99240398406982 8.408544540405273 12.99240398406982 4.737284660339355 C 13.06877422332764 2.711864471435547 11.49632358551025 1.004974365234375 9.473013877868652 0.9169940948486328 C 8.232013702392578 0.936314582824707 7.096103668212891 1.618414878845215 6.495073795318604 2.705214500427246 C 5.894043922424316 1.618414878845215 4.758133888244629 0.936314582824707 3.517133712768555 0.9169940948486328 M 3.503183364868164 -0.08334541320800781 L 3.532703399658203 -0.0828857421875 C 4.645752906799316 -0.06555557250976562 5.698249816894531 0.3697652816772461 6.495073795318604 1.105915069580078 C 7.291897773742676 0.3697652816772461 8.344394683837891 -0.06555557250976562 9.457443237304688 -0.0828857421875 L 9.486963272094727 -0.08334541320800781 L 9.516453742980957 -0.08206558227539062 C 12.07462310791016 0.02917194366455078 14.07866477966309 2.197760581970215 13.9923620223999 4.756255149841309 C 13.9845666885376 6.551984310150146 12.87970924377441 8.58316707611084 10.70816421508789 10.7934741973877 C 9.146333694458008 12.38319492340088 7.561803817749023 13.52016448974609 7.386263847351074 13.64457416534424 L 6.495083808898926 14.2757043838501 L 5.604183673858643 13.64479446411133 C 5.311803817749023 13.43631458282471 3.790083885192871 12.32797431945801 2.282003402709961 10.79310417175293 C 0.1104488372802734 8.582965850830078 -0.9944190979003906 6.551914215087891 -1.002214431762695 4.756256103515625 C -1.088517189025879 2.197760581970215 0.9155244827270508 0.02917194366455078 3.47369384765625 -0.08206558227539062 L 3.503183364868164 -0.08334541320800781 Z"
                                                    stroke="none" fill="#000" />
                                            </g>
                                        </g>
                                    </svg>
            `;

            s0407_wishlist_icon_wrapper.appendChild(s0407_wishlist_icon);

            // cart and wish list interaction

            s0407_wishlist_icon_wrapper.addEventListener("click", function (event) {
                event.stopPropagation();
                document.querySelector(".s0407_wishlist_icon").classList.add("s0407_active_wishlist_icon");
                s0407_wishlist_icon_wrapper.children[0].classList.toggle("s0407_active_wishlist_icon");
            });

            const s0407_cart_icon_wrapper = elementMaker("div", ["s0407_cart_icon_wrapper"]);
            s0407_wishlist_and_cart_area.appendChild(s0407_cart_icon_wrapper);
            const s0407_cart_icon = elementMaker("span", ["s0407_cart_icon"]);
            s0407_cart_icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="14.996" height="15.363"
                                        viewBox="0 0 14.996 15.363">
                                        <g id="Cart" transform="translate(1 0.5)">
                                            <g id="Body" transform="translate(-291.08 -413.249)" fill="none">
                                                <path
                                                    d="M304.076,418.11v7.3a1.83,1.83,0,0,1-1.9,1.707h-9.2a1.852,1.852,0,0,1-1.9-1.75V418.11Z"
                                                    stroke="none" />
                                                <path
                                                    d="M 291.0799865722656 418.1099853515625 L 291.0799865722656 425.3619689941406 C 291.0894165039062 426.3236999511719 291.9345092773438 427.0948181152344 292.9768676757812 427.1121520996094 L 302.1795043945312 427.1121520996094 C 303.2124328613281 427.1121520996094 304.0575561523438 426.3497009277344 304.0763549804688 425.4053039550781 L 304.0763549804688 418.1099853515625 L 291.0799865722656 418.1099853515625 M 290.0799865722656 417.1099853515625 L 305.0763549804688 417.1099853515625 L 305.0761413574219 425.4252014160156 C 305.0614929199219 426.1615600585938 304.7423400878906 426.8472290039062 304.1774291992188 427.35595703125 C 303.6359558105469 427.8435974121094 302.9263916015625 428.1121520996094 302.1795043945312 428.1121520996094 L 292.9602355957031 428.1119995117188 C 292.2098083496094 428.0995483398438 291.5009460449219 427.8208618164062 290.9642028808594 427.3273010253906 C 290.4013366699219 426.8097229003906 290.0873107910156 426.115234375 290.0800476074219 425.3717651367188 L 290.0799865722656 425.3619689941406 L 290.0799865722656 417.1099853515625 Z"
                                                    stroke="none" fill="#000" />
                                            </g>
                                            <path id="Handle" d="M294.5,417.579v-1.167a3.466,3.466,0,1,1,6.931,0v1.167"
                                                transform="translate(-291.468 -412.9)" fill="none" stroke="#000"
                                                stroke-width="1" />
                                        </g>
                                    </svg>
            `;
            s0407_cart_icon_wrapper.appendChild(s0407_cart_icon);

            s0407_cart_icon_wrapper.addEventListener("click", function (event) {
                event.stopPropagation();
                document.querySelector(".s0407_cart_icon").classList.add("s0407_active_cart_icon");
                s0407_cart_icon_wrapper.children[0].classList.toggle("s0407_active_cart_icon");
            });

            // product level area
            const s0407_product_label = elementMaker("div", ["s0407_product_label"]);
            s0407_product_inner_content_wrapper.appendChild(s0407_product_label);
            const s0407_product_name_wrapper = elementMaker("div", ["s0407_product_name_wrapper"]);
            s0407_product_label.appendChild(s0407_product_name_wrapper);
            const s0407_product_name = elementMaker("p", ["s0407_product_name"]);
            s0407_product_name.textContent = `${singleProduct?.name}`;
            s0407_product_name_wrapper.appendChild(s0407_product_name);

            const s0407_product_price_wrapper = elementMaker("div", ["s0407_product_price_wrapper"]);
            s0407_product_label.appendChild(s0407_product_price_wrapper);
            const s0407_product_price_txt = elementMaker("p", ["s0407_product_price_txt"]);
            s0407_product_price_txt.innerHTML = `${CURRENCY} ${singleProduct?.price}`;
            s0407_product_price_wrapper.appendChild(s0407_product_price_txt);

            // product review
            const s0407_product_rating_area = elementMaker("div", ["s0407_product_rating_area"]);
            s0407_product_label.appendChild(s0407_product_rating_area);
            const s0407_product_rating_inner_item = elementMaker("div", ["s0407_product_rating_inner_item"]);
            s0407_product_rating_area.appendChild(s0407_product_rating_inner_item);
            // s0407_product_rating_inner_item.appendChild()
            const ratingNumber = singleProduct?.reviewRating?.rating;

            function showReviewStar(ratingNumber, s0407_product_rating_inner_item) {
                let stars = ratingNumber;
                let starsFloor = Math.floor(stars);
                for (let i = 0; i < starsFloor; i++) {
                    let fc001_review_star = elementMaker("li", ["s0407_rating_star"]);
                    fc001_review_star.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="#fed300"></path> </svg>
                     `

                    s0407_product_rating_inner_item.appendChild(fc001_review_star);

                };
                let starDecimal = stars - starsFloor;
                if (starDecimal > 0) {
                    let fc001_review_star = elementMaker("li", ["s0407_rating_star"]);
                    fc001_review_star.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="11" viewBox="0 0 11 11"> <defs> <linearGradient id="linear-gradient" y1="0.384" x2="1" y2="0.381" gradientUnits="objectBoundingBox"> <stop offset="0" stop-color="#fed300"></stop> <stop offset="0.5" stop-color="#fbd414"></stop> <stop offset="0.503" stop-color="#dedbcc"></stop> <stop offset="1" stop-color="#dcdcdc"></stop> </linearGradient> </defs> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="url(#linear-gradient)"></path> </svg>
                                `;
                    s0407_product_rating_inner_item.appendChild(fc001_review_star);
                };
                if ((5 - stars) > 0) {
                    for (let i = 0; i < Math.floor((5 - stars)); i++) {
                        let fc001_review_star = elementMaker("li", ["s0407_rating_star"]);
                        fc001_review_star.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="#dfdfdf"></path> </svg>
                                `;
                        s0407_product_rating_inner_item.appendChild(fc001_review_star);
                    };
                };


            }
            showReviewStar(ratingNumber, s0407_product_rating_inner_item);

            document.querySelector(".s0407_trending_items_trending_product").appendChild(s0407_trending_items_single_product);
        }

    };
    await showTreandingItem(treandingProduct);

    function elementMaker(name, className, id) {
        try {
            let element = document.createElement(name);
            className && (element.className = className.join(" "));
            id && (element.id = id);
            return element;
        } catch (err) { };
    };
    function setAttributes(elementName, allAttributes) {
        for (let key in allAttributes) {
            elementName.setAttribute(key, allAttributes[key]);
        };
    };

})();