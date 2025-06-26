module.exports = targets => {
    const { Targetables } = require('@magento/pwa-buildpack');
    const targetables = Targetables.using(targets);

    const productComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
    );

    const ProductJsonLd = productComponent.addImport(
        "ProductJsonLd from '@twoja-firma/pwa-schema-product/src/components/ProductJsonLd'"
    );

    productComponent.insertAfterSource(
        '<section className={classes.root}>',
        `<${ProductJsonLd} product={product} />`
    );
};