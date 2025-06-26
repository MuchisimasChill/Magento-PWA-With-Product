function getProductJsonLd(product) {
    if (!product) return null;

    const offers = {
        "@type": "Offer",
        "price": product.price?.regularPrice?.amount?.value,
        "priceCurrency": product.price?.regularPrice?.amount?.currency,
        "availability": product.stock_status === "IN_STOCK" ? "http://schema.org/InStock" : "http://schema.org/OutOfStock",
        "url": window.location.href
    };

    return {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "sku": product.sku,
        "image": product.small_image?.url || product.image?.url,
        "offers": offers
    };
}

export default getProductJsonLd;