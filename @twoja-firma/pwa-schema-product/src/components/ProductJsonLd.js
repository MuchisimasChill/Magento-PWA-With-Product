import getProductJsonLd from '../utils/getProductJsonLd';

const ProductJsonLd = ({ product }) => {
    const jsonLd = getProductJsonLd(product);
    if (!jsonLd) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default ProductJsonLd;