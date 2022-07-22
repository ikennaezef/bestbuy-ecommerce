export default {
  name: 'product',
  title: 'product',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true
      }
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
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string'
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
  ]
}