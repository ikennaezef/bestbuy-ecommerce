export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.max(1),
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },
        {
            name: 'productName',
            title: 'Product Name',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'productName',
                maxLength: 90
            }
        },
        {
            name: 'smallText',
            title: 'Small Text',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'Large Text 1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'Large Text 2',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'Sale Time',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: ['earphones', 'earpods', 'speaker', 'headphone', 'watch', 'gaming']
            },
            validation: Rule => Rule.required().error('A category is required')
        }
    ],
};